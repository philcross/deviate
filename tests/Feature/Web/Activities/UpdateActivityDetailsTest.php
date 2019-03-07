<?php

namespace Tests\Feature\Web\Activities;

use Tests\TestCase;
use App\Models\Activities\Activity;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group activities
 * @group feature
 */
class UpdateActivityDetailsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_activity_can_be_updated()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->putJson('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id, [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 100,
            'price'       => 150,
            'starts_at'   => $activity->collection->activities_end_at->format('Y-m-d\T09:00:00.000\Z'),
            'ends_at'     => $activity->collection->activities_end_at->format('Y-m-d\T15:30:00.000\Z'),
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseHas('activities', [
            'id'          => $activity->id,
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 100,
            'price'       => 15000,
            'starts_at'   => $activity->collection->activities_end_at->format('Y-m-d 09:00:00'),
            'ends_at'     => $activity->collection->activities_end_at->format('Y-m-d 15:30:00'),
        ]);
    }

    /** @test */
    public function it_returns_an_error_if_the_data_is_invalid()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->putJson('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id, []);

        $response->assertValidationErrors('name', 'description', 'places', 'price', 'starts_at', 'ends_at');
    }

    /** @test */
    public function the_starts_at_date_must_be_after_the_starts_at_date_on_the_collection()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->putJson('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id, [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $activity->collection->activities_start_at->subDays(1)->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $activity->collection->activities_end_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('starts_at');
    }

    /** @test */
    public function the_starts_at_date_must_be_before_the_ends_at_date_on_the_collection()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->putJson('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id, [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $activity->collection->activities_end_at->addDays(1)->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $activity->collection->activities_end_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('starts_at');
    }

    /** @test */
    public function the_ends_at_date_must_be_before_the_ends_at_date_on_the_collection()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->putJson('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id, [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $activity->collection->activities_start_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $activity->collection->activities_end_at->addDays(1)->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('ends_at');
    }

    /** @test */
    public function the_ends_at_date_must_be_after_the_starts_at_date_on_the_collection()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->putJson('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id, [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $activity->collection->activities_start_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $activity->collection->activities_start_at->subDays(1)->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('ends_at');
    }

    /** @test */
    public function the_start_at_date_must_be_before_the_ends_at_date()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->putJson('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id, [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $activity->collection->activities_end_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $activity->collection->activities_start_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('ends_at');
    }

    /** @test */
    public function the_number_of_places_available_must_be_greater_or_equal_to_0()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->putJson('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id, [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => -1,
            'price'       => '50.00',
            'starts_at'   => $activity->collection->activities_start_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $activity->collection->activities_end_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('places');
    }

    /** @test */
    public function the_price_must_be_a_valid_price()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->putJson('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id, [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '£50,00',
            'starts_at'   => $activity->collection->activities_start_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $activity->collection->activities_end_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('price');
    }
}
