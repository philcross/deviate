<?php

namespace Tests\Feature\Web\Organisations\Billing;

use Tests\TestCase;
use Tests\Feature\Helpers\InteractsWithStripe;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group organisations
 * @group organisation-billing
 * @group feature
 * @group stripe
 */
class SelectPlanTest extends TestCase
{
    use RefreshDatabase,
        InteractsWithStripe;

    /** @test */
    public function it_can_select_a_plan_for_the_first_time()
    {
        $this->withRealStripeCard('tok_gb');

        $response = $this->putJson('/organisation/plans', [
            'plan_id' => 'monthly',
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseHas('subscriptions', [
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'name'            => 'main',
            'stripe_plan'     => config('services.stripe.plans.monthly'),
            'quantity'        => 1,
        ]);
    }

    /** @test */
    public function it_can_change_an_existing_subscription()
    {
        $this->withRealStripeCard('tok_gb');
        $this->withExistingSubscription('monthly');

        $response = $this->putJson('/organisation/plans', [
            'plan_id' => 'annual',
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseHas('subscriptions', [
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'name'            => 'main',
            'stripe_plan'     => config('services.stripe.plans.annual'),
            'quantity'        => 1,
        ]);
    }
}
