<?php

namespace Tests\Feature\Web\Activities;

use Tests\TestCase;
use Illuminate\Http\UploadedFile;
use App\Models\Activities\Activity;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Feature\Helpers\Testers\Files\TestsForImages;
use Tests\Feature\Helpers\Testers\Images\TestsImageDimensions;

/**
 * @group web
 * @group activities
 * @group feature
 */
class UpdateImageTest extends TestCase
{
    use TestsForImages,
        RefreshDatabase,
        TestsImageDimensions;

    /** @var Activity */
    protected $activity;

    /** @var UploadedFile */
    protected $image;

    /** @var string */
    protected $url;

    /** @var integer */
    protected $minimumDimensions = 50;

    /** @var integer */
    protected $maximumDimensions = 3000;

    /** @var string */
    protected $uploadFieldName = 'image';

    /** @test */
    public function a_new_image_can_be_uploaded_for_an_activity()
    {
        $response = $this->postJson($this->url, [
            'image' => $this->image,
        ]);

        $response->assertSuccessful();

        Storage::disk('activities')->assertExists($this->image->hashName());

        $this->assertDatabaseHas('images', [
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'disk'            => 'activities',
            'filename'        => $this->image->hashName(),
            'imageable_id'    => $this->activity->id,
            'imageable_type'  => Activity::class,
        ]);
    }

    /** @test */
    public function it_deletes_the_previous_image_after_uploading_a_new_one()
    {
        $originalFile = UploadedFile::fake()->image('old-image.jpg', 50, 50);

        $this->activity->image()->create([
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'disk'            => 'activities',
            'filename'        => Storage::disk('activities')->putFile('/', $originalFile),
        ]);

        $response = $this->postJson($this->url, [
            'image' => $this->image,
        ]);

        $response->assertSuccessful();

        Storage::disk('activities')->assertExists($this->image->hashName());
        Storage::disk('activities')->assertMissing($originalFile->hashName());

        $this->assertDatabaseHas('images', [
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'disk'            => 'activities',
            'filename'        => $this->image->hashName(),
            'imageable_id'    => $this->activity->id,
            'imageable_type'  => Activity::class,
        ]);
    }

    protected function setUp()
    {
        parent::setUp();

        Storage::fake('activities');
        UploadedFile::fake()->image('default.jpg')->store('default.jpg', 'activities');

        $this->activity = factory(Activity::class)->create();
        $this->image    = UploadedFile::fake()->image('valid-image.jpg', 100, 50);
        $this->url      = '/activity-collections/'.$this->activity->collection->hash_id.'/activities/'.$this->activity->hash_id.'/image';
    }
}
