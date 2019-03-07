<?php

namespace Tests\Feature\Web\Activities\Collections;

use Tests\TestCase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Models\Activities\ActivityCollection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Feature\Helpers\Testers\Files\TestsForImages;
use Tests\Feature\Helpers\Testers\Images\TestsImageDimensions;

class UploadImageTest extends TestCase
{
    use TestsForImages,
        RefreshDatabase,
        TestsImageDimensions;

    /** @var ActivityCollection */
    protected $collection;

    /** @var UploadedFile */
    protected $image;

    /** @var string */
    protected $url;

    /** @var string */
    protected $uploadFieldName = 'image';

    /** @var integer */
    protected $minimumDimensions = 50;

    /** @var integer */
    protected $maximumDimensions = 3000;

    /** @test */
    public function a_new_image_can_be_uploaded_for_a_collection()
    {
        $response = $this->postJson($this->url, [
            'image' => $this->image,
        ]);

        $response->assertSuccessful();

        Storage::disk('collections')->assertExists($this->image->hashName());

        $this->assertDatabaseHas('images', [
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'disk'            => 'collections',
            'filename'        => $this->image->hashName(),
            'imageable_id'    => $this->collection->id,
            'imageable_type'  => ActivityCollection::class,
        ]);
    }

    /** @test */
    public function it_deletes_the_previous_image_after_uploading_a_new_one()
    {
        $originalFile = UploadedFile::fake()->image('old-image.jpg', 50, 50);

        $this->collection->image()->create([
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'disk'            => 'collections',
            'filename'        => Storage::disk('collections')->putFile('/', $originalFile),
        ]);

        $response = $this->postJson($this->url, [
            'image' => $this->image,
        ]);

        $response->assertSuccessful();

        Storage::disk('collections')->assertExists($this->image->hashName());
        Storage::disk('collections')->assertMissing($originalFile->hashName());

        $this->assertDatabaseHas('images', [
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'disk'            => 'collections',
            'filename'        => $this->image->hashName(),
            'imageable_id'    => $this->collection->id,
            'imageable_type'  => ActivityCollection::class,
        ]);
    }

    /** @test */
    public function if_the_collection_doesnt_currently_have_an_image_the_default_image_is_not_deleted_when_a_new_image_is_uploaded()
    {
        $response = $this->postJson($this->url, [
            'image' => $this->image,
        ]);

        $response->assertSuccessful();

        Storage::disk('collections')->assertExists('default.jpg');
    }

    protected function setUp()
    {
        parent::setUp();

        Storage::fake('collections');
        UploadedFile::fake()->image('default.jpg')->store('default.jpg', 'collections');

        $this->collection = factory(ActivityCollection::class)->create();
        $this->image      = UploadedFile::fake()->image('valid-image.jpg', 100, 50);
        $this->url        = '/activity-collections/'.$this->collection->hash_id.'/image';
    }
}
