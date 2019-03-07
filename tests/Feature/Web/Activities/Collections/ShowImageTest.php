<?php

namespace Tests\Feature\Web\Activities\Collections;

use Tests\TestCase;
use App\Models\Activities\ActivityCollection;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ShowImageTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_a_collections_image()
    {
        $collection = factory(ActivityCollection::class)->create();

        $response = $this->get('/activity-collections/'.$collection->hash_id.'/image');

        $response->assertSuccessful();
    }
}
