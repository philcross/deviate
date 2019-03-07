<?php

namespace Tests\Feature\Web\Activities;

use Tests\TestCase;
use Illuminate\Http\UploadedFile;
use App\Models\Activities\Activity;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DeleteImageTest extends TestCase
{
    use RefreshDatabase;

    /** @var Activity */
    protected $activity;

    /** @test */
    public function it_can_delete_an_activities_image()
    {
        $originalFile = UploadedFile::fake()->image('old-image.jpg', 50, 50);

        $this->activity->image()->create([
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'disk'            => 'activities',
            'filename'        => Storage::disk('activities')->putFile('/', $originalFile),
        ]);

        $response = $this->deleteJson('/activity-collections/'.$this->activity->collection->hash_id.'/activities/'.$this->activity->hash_id.'/image');

        $response->assertSuccessful();

        Storage::disk('activities')->assertMissing($originalFile->hashName());
    }

    /** @test */
    public function if_an_activity_doesnt_have_an_image_the_default_image_is_not_deleted()
    {
        $response = $this->deleteJson('/activity-collections/'.$this->activity->collection->hash_id.'/activities/'.$this->activity->hash_id.'/image');

        $response->assertSuccessful();

        Storage::disk('activities')->assertExists('default.jpg');
    }

    protected function setUp()
    {
        parent::setUp();

        Storage::fake('activities');
        UploadedFile::fake()->image('default.jpg')->store('default.jpg', 'activities');

        $this->activity = factory(Activity::class)->create();
        $this->image = UploadedFile::fake()->image('valid-image.jpg', 100, 50);
    }
}
