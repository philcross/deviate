<?php

namespace Tests\Feature\Web\Activities\Collections;

use Tests\TestCase;
use App\Models\Activities\ActivityCollection;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DeleteCollectionTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_collection_can_be_deleted()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->deleteJson('/activity-collections/'.$collection->hash_id);

        $response->assertSuccessful();

        $this->assertDatabaseMissing('activity_collections', [
            'id' => $collection->id,
        ]);
    }
}
