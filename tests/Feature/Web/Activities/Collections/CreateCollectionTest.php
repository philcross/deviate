<?php

namespace Tests\Feature\Web\Activities\Collections;

use Tests\TestCase;
use App\Models\Activities\ActivityCollection;
use App\Http\Resources\Activities\ActivityGroup;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group activity-collections
 * @group feature
 */
class CreateCollectionTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_new_activity_collection_can_be_created()
    {
        $response = $this->postJson('/activity-collections', $this->validPayload());

        $response->assertSuccessful();

        $this->assertDatabaseHas('activity_collections', [
            'organisation_id'     => app('auth')->guard()->user()->organisation_id,
            'name'                => 'Test Collection',
            'description'         => 'This is a test description',
            'is_hidden'           => 0,
            'booking_opens_at'    => '2019-01-01 00:00:00',
            'booking_closes_at'   => '2019-01-07 23:59:59',
            'payment_opens_at'    => '2019-01-08 00:00:00',
            'payment_closes_at'   => '2019-01-14 23:59:59',
            'activities_start_at' => '2019-01-15 00:00:00',
            'activities_end_at'   => '2019-01-21 23:59:59',
        ]);

        $response->assertJsonResource(
            new ActivityGroup(ActivityCollection::first())
        );
    }

    /** @test */
    public function an_error_is_returned_if_the_data_is_invalid()
    {
        $response = $this->postJson('/activity-collections', []);

        $response->assertValidationErrors([
            'name', 'description', 'booking_opens_at', 'booking_closes_at', 'payment_opens_at', 'payment_closes_at',
            'activities_start_at', 'activities_end_at',
        ]);
    }

    /** @test */
    public function the_open_dates_must_be_before_the_close_dates()
    {
        $response = $this->postJson('/activity-collections', $this->validPayload([
            'booking_opens_at'    => '2019-01-07T00:00:00.000Z',
            'booking_closes_at'   => '2019-01-01T00:00:00.000Z',
            'payment_opens_at'    => '2019-01-14T00:00:00.000Z',
            'payment_closes_at'   => '2019-01-08T00:00:00.000Z',
            'activities_start_at' => '2019-01-21T00:00:00.000Z',
            'activities_end_at'   => '2019-01-15T00:00:00.000Z',
        ]));

        $response->assertValidationErrors('booking_closes_at', 'payment_closes_at', 'activities_end_at');
    }

    /** @test */
    public function the_open_and_start_dates_must_be_after_the_previous_close_and_end_dates()
    {
        $response = $this->postJson('/activity-collections', $this->validPayload([
            'booking_opens_at'    => '2019-01-01T00:00:00.000Z',
            'booking_closes_at'   => '2019-01-07T00:00:00.000Z',
            'payment_opens_at'    => '2019-01-06T00:00:00.000Z',
            'payment_closes_at'   => '2019-01-14T00:00:00.000Z',
            'activities_start_at' => '2019-01-13T00:00:00.000Z',
            'activities_end_at'   => '2019-01-21T00:00:00.000Z',
        ]));

        $response->assertValidationErrors('payment_opens_at', 'activities_start_at');
    }

    private function validPayload(array $override = [])
    {
        return array_merge([
            'name'                => 'Test Collection',
            'description'         => 'This is a test description',
            'is_hidden'           => 0,
            'booking_opens_at'    => '2019-01-01T00:00:00.000Z',
            'booking_closes_at'   => '2019-01-07T00:00:00.000Z',
            'payment_opens_at'    => '2019-01-08T00:00:00.000Z',
            'payment_closes_at'   => '2019-01-14T00:00:00.000Z',
            'activities_start_at' => '2019-01-15T00:00:00.000Z',
            'activities_end_at'   => '2019-01-21T00:00:00.000Z',
        ], $override);
    }
}
