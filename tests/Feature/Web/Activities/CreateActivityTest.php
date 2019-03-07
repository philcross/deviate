<?php

namespace Tests\Feature\Web\Activities;

use Tests\TestCase;
use App\Models\Activities\Activity;
use App\Models\Activities\ActivityCollection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\Activities\Activity as ActivityResource;

/**
 * @group web
 * @group activities
 * @group feature
 */
class CreateActivityTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_activity_can_be_created()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->postJson('/activity-collections/'.$collection->hash_id.'/activities', [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $collection->activities_start_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $collection->activities_end_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new ActivityResource(Activity::first())
        );

        $this->assertDatabaseHas('activities', [
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'collection_id'   => $collection->id,
            'name'            => 'Test Activity',
            'description'     => 'This is a test description',
            'places'          => 10,
            'price'           => 5000,
            'starts_at'       => $collection->activities_start_at->format('Y-m-d 09:00:00'),
            'ends_at'         => $collection->activities_end_at->format('Y-m-d 15:30:00'),
        ]);
    }

    /** @test */
    public function it_returns_an_error_if_the_data_is_invalid()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->postJson('/activity-collections/'.$collection->hash_id.'/activities', []);

        $response->assertValidationErrors('name', 'description', 'places', 'price', 'starts_at', 'ends_at');
    }

    /** @test */
    public function the_starts_at_date_must_be_after_the_starts_at_date_on_the_collection()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->postJson('/activity-collections/'.$collection->hash_id.'/activities', [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $collection->activities_start_at->subDays(1)->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $collection->activities_end_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('starts_at');
    }

    /** @test */
    public function the_starts_at_date_must_be_before_the_ends_at_date_on_the_collection()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->postJson('/activity-collections/'.$collection->hash_id.'/activities', [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $collection->activities_end_at->addDays(1)->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $collection->activities_end_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('starts_at');
    }

    /** @test */
    public function the_ends_at_date_must_be_before_the_ends_at_date_on_the_collection()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->postJson('/activity-collections/'.$collection->hash_id.'/activities', [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $collection->activities_start_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $collection->activities_end_at->addDays(1)->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('ends_at');
    }

    /** @test */
    public function the_ends_at_date_must_be_after_the_starts_at_date_on_the_collection()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->postJson('/activity-collections/'.$collection->hash_id.'/activities', [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $collection->activities_start_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $collection->activities_start_at->subDays(1)->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('ends_at');
    }

    /** @test */
    public function the_start_at_date_must_be_before_the_ends_at_date()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->postJson('/activity-collections/'.$collection->hash_id.'/activities', [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '50.00',
            'starts_at'   => $collection->activities_end_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $collection->activities_start_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('ends_at');
    }

    /** @test */
    public function the_number_of_places_available_must_be_greater_or_equal_to_0()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->postJson('/activity-collections/'.$collection->hash_id.'/activities', [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => -1,
            'price'       => '50.00',
            'starts_at'   => $collection->activities_start_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $collection->activities_end_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('places');
    }

    /** @test */
    public function the_price_must_be_a_valid_price()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->postJson('/activity-collections/'.$collection->hash_id.'/activities', [
            'name'        => 'Test Activity',
            'description' => 'This is a test description',
            'places'      => 10,
            'price'       => '£50,00',
            'starts_at'   => $collection->activities_start_at->format('Y-m-d\T09:00:00\.000\Z'),
            'ends_at'     => $collection->activities_end_at->format('Y-m-d\T15:30:00\.000\Z'),
        ]);

        $response->assertValidationErrors('price');
    }
}
