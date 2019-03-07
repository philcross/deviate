<?php

namespace Tests\Feature\Web\Organisations\Billing;

use Tests\TestCase;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Tests\Feature\Helpers\InteractsWithStripe;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group organisations
 * @group organisation-billing
 * @group feature
 * @group stripe
 */
class DeletePaymentMethodTest extends TestCase
{
    use RefreshDatabase,
        InteractsWithStripe;

    /** @test */
    public function a_payment_method_can_be_deleted()
    {
        $card = $this->withRealStripeCard('tok_gb');

        $response = $this->deleteJson('/organisation/billing/cards/'.$card->id);

        $response->assertSuccessful();

        $this->assertEmpty(app('auth')->guard()->user()->organisation->cards());
    }

    /** @test */
    public function when_the_default_card_is_deleted_the_previous_registered_card_is_made_default()
    {
        $originalCard = $this->withRealStripeCard('tok_gb');
        $latestCard   = $this->withRealStripeCard('tok_gb_debit');

        $response = $this->deleteJson('/organisation/billing/cards/'.$latestCard->id);

        $response->assertSuccessful();

        /** @var Collection $cards */
        $cards = app('auth')->guard()->user()->organisation->cards();

        $this->assertCount(1, $cards);
        $this->assertEquals($originalCard->id, $cards->first()->id);
    }

    /** @test */
    public function when_a_card_is_deleted_the_cache_is_also_cleared()
    {
        $originalCard = $this->withRealStripeCard('tok_gb');
        $latestCard   = $this->withRealStripeCard('tok_gb_debit');

        $response = $this->deleteJson('/organisation/billing/cards/'.$latestCard->id);

        $response->assertSuccessful();

        $cache = Cache::get(sprintf('stripe.customers.%s.cards', app('auth')->guard()->user()->organisation_id));

        $this->assertEmpty($cache);
    }
}
