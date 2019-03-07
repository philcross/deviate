<?php

namespace Tests\Feature\Web\Activities\Collections;

use Tests\TestCase;
use App\Models\Activities\ActivityCollection;
use App\Http\Resources\Activities\ActivityGroup;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ShowCollectionTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_an_activity_collection()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->getJson('/activity-collections/'.$collection->hash_id);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new ActivityGroup(ActivityCollection::first())
        );
    }
}
