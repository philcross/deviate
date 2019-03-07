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
class ShowActivityTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_an_activity()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->getJson('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new ActivityResource(Activity::first())
        );
    }

    /** @test */
    public function it_returns_an_error_if_the_activity_doesnt_belong_to_the_collection()
    {
        $collection = factory(ActivityCollection::class)->create();
        $activity = factory(Activity::class)->create();

        $response = $this->getJson('/activity-collections/'.$collection->hash_id.'/activities/'.$activity->hash_id);

        $response->assertStatus(404);
    }
}
