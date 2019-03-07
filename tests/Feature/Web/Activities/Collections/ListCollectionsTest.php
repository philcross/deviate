<?php

namespace Tests\Feature\Web\Activities\Collections;

use Tests\TestCase;
use App\Models\Activities\ActivityCollection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\Activities\ActivityGroupCollection;

/**
 * @group web
 * @group activity-collections
 * @group feature
 */
class ListCollectionsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_a_list_of_activity_collections()
    {
        factory(ActivityCollection::class, 2)->create();

        $response = $this->getJson('/activity-collections');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new ActivityGroupCollection(ActivityCollection::orderBy('name')->paginate(20))
        );
    }

    /** @test */
    public function it_doesnt_return_hidden_groups()
    {
        factory(ActivityCollection::class)->state('hidden')->create();

        $response = $this->getJson('/activity-collections');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new ActivityGroupCollection(ActivityCollection::visible()->paginate(20))
        );
    }
}
