<?php

namespace Tests\Feature\Web\Activities;

use Tests\TestCase;
use App\Models\Activities\Activity;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ShowImageTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_an_activities_image()
    {
        $activity = factory(Activity::class)->create();

        $response = $this->get('/activity-collections/'.$activity->collection->hash_id.'/activities/'.$activity->hash_id.'/image');

        $response->assertSuccessful();
    }
}
