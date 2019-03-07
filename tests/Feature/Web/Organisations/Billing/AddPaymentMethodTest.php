<?php

namespace Tests\Feature\Web\Organisations\Billing;

use Tests\TestCase;
use Illuminate\Support\Facades\Cache;
use App\Exceptions\Stripe\CardErrorException;
use Tests\Feature\Helpers\InteractsWithStripe;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group organisations
 * @group organisation-billing
 * @group feature
 * @group stripe
 */
class AddPaymentMethodTest extends TestCase
{
    use RefreshDatabase,
        InteractsWithStripe;

    /** @test */
    public function a_new_payment_method_can_be_registered()
    {
        $this->withRealStripeCustomer();

        $response = $this->postJson('/organisation/billing/cards', [
            'token' => 'tok_gb',
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseHas('organisations', [
            'card_brand'     => 'Visa',
            'card_last_four' => '0000',
        ]);

        $this->assertInstanceOf(\Stripe\Card::class, app('auth')->guard()->user()->organisation->defaultCard());
    }

    /** @test */
    public function it_can_capture_card_errors_from_stripe_correctly()
    {
        $this->withRealStripeCustomer();

        $response = $this->postJson('/organisation/billing/cards', [
            'token' => 'tok_chargeDeclinedExpiredCard',
        ]);

        $response->assertException(CardErrorException::ERROR_CODE, [
            'details' => 'An error was returned from Stripe with the message: Your card has expired.',
        ]);
    }

    /** @test */
    public function when_a_new_card_is_added_the_card_cache_for_the_customer_is_cleared()
    {
        $this->withRealStripeCustomer();

        $response = $this->postJson('/organisation/billing/cards', [
            'token' => 'tok_gb',
        ]);

        $response->assertSuccessful();

        $cache = Cache::get(sprintf('stripe.customers.%s.cards', app('auth')->guard()->user()->organisation_id));

        $this->assertEmpty($cache);
    }
}
