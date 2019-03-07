<?php

namespace Tests\Feature\Web\Activities;

use Tests\TestCase;
use App\Models\Activities\Activity;
use App\Models\Activities\ActivityCollection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\Activities\ActivityCollection as ActivityCollectionResource;
/**
 * @group web
 * @group activities
 * @group feature
 */
class ListActivitiesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_a_list_of_activities()
    {
        $collection = factory(ActivityCollection::class)->create();

        factory(Activity::class, 2)->create([
            'collection_id' => $collection->id,
        ]);

        $response = $this->getJson('/activity-collections/'.$collection->hash_id.'/activities');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new ActivityCollectionResource(Activity::orderBy('starts_at')->orderBy('name')->paginate(999))
        );
    }
}
