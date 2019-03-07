<?php

namespace Tests\Feature\Helpers;

use App\Models\Organisations\Organisation;
use Laravel\Cashier\Subscription;
use Stripe\Card;

trait InteractsWithStripe
{
    /**
     * Create the organisation as an actual customer on stripe. If null is provided
     * it will use the current "acting as" users organisation.
     *
     * @param Organisation|null $organisation
     * @param integer $balance
     *
     * @return Organisation
     */
    protected function withRealStripeCustomer(Organisation $organisation = null, $balance = 0)
    {
        if (!$organisation) {
            $organisation = app('auth')->guard()->user()->organisation;
        }

        if (empty($organisation->stripe_id)) {
            $organisation->createAsStripeCustomer([
                'account_balance' => $balance,
                'metadata'        => [
                    'deviate_id' => $organisation->id,
                ],
            ]);
        }

        $organisation->refresh();

        return $organisation;
    }

    /**
     * Create a new card for the organisation on stripe. If no customer has been created, this
     * method will call the withRealStripeCustomer method
     *
     * @param string $token
     * @param Organisation|null $organisation
     *
     * @return Card
     */
    protected function withRealStripeCard($token, Organisation $organisation = null)
    {
        $organisation = $this->withRealStripeCustomer($organisation);

        $organisation->updateCard($token);

        return $organisation->defaultCard();
    }

    /**
     * Create a subscription to a given plan on stripe.
     *
     * @param string $planId
     * @param Organisation|null $organisation
     *
     * @return Subscription
     */
    public function withExistingSubscription($planId, Organisation $organisation = null)
    {
        $planId = config('services.stripe.plans.'.$planId);

        $organisation = $this->withRealStripeCustomer($organisation);

        return $organisation->newSubscription('main', $planId)->create();
    }
}
