<?php

namespace App\Http\Controllers\Web\Organisations\Billing;

use Laravel\Cashier\Card;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Stripe\Error\Base as StripeException;
use App\Exceptions\Stripe\GenericStripeError;
use App\Http\Requests\Organisations\Billing\DeletePaymentMethod as Request;

class DeletePaymentMethod extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param string $cardId
     *
     * @return void
     *
     * @throws GenericStripeError
     */
    public function __invoke(Request $request, $cardId)
    {
        try {
            /** @var Card $card */
            $card = $request->organisation()->cards()->first(function (Card $card) use ($cardId) {
                return $cardId === $card->id;
            });

            if ($card) {
                $card->delete();

                $request->organisation()->updateCardFromStripe();

                Cache::forget(sprintf('stripe.customers.%s.cards', $request->organisationId()));
            }
        } catch (StripeException $exception) {
            throw new GenericStripeError($exception->getMessage());
        }
    }
}
