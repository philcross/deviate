<?php

namespace Tests\Feature\Web\Organisations\Billing;

use Tests\TestCase;
use Illuminate\Support\Facades\Cache;
use App\Http\Resources\Stripe\CardCollection;
use Tests\Feature\Helpers\InteractsWithStripe;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group organisations
 * @group organisation-billing
 * @group feature
 * @group stripe
 */
class FetchPaymentCardsTest extends TestCase
{
    use RefreshDatabase,
        InteractsWithStripe;

    /** @test */
    public function it_can_return_a_list_of_registered_payment_methods()
    {
        $cards = collect([$this->withRealStripeCard('tok_gb')]);

        $response = $this->getJson('/organisation/billing/cards');

        $response->assertSuccessful();

        $response->assertJsonResource(new CardCollection($cards));
    }

    /** @test */
    public function when_cards_are_retrieved_they_are_also_cached()
    {
        $card = $this->withRealStripeCard('tok_gb');

        $response = $this->getJson('/organisation/billing/cards');

        $response->assertSuccessful();

        $cached = Cache::get(sprintf('stripe.customers.%s.cards', app('auth')->guard()->user()->organisation_id));

        $this->assertCount(1, $cached);
        $this->assertEquals($card->id, $cached->first()->id);
    }
}
