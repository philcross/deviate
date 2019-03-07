<?php

namespace Tests\Feature\Web\Users\Avatars;

use Tests\TestCase;
use App\Models\Users\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Feature\Helpers\Testers\Files\TestsForImages;
use Tests\Feature\Helpers\Testers\Images\TestsImageDimensions;

/**
 * @group web
 * @group users
 * @group users-avatars
 * @group feature
 */
class UpdateAvatarTest extends TestCase
{
    use TestsForImages,
        RefreshDatabase,
        TestsImageDimensions;

    /** @var User */
    protected $user;

    /** @var UploadedFile */
    protected $file;

    /** @var string */
    protected $url;

    /** @var string */
    protected $uploadFieldName = 'avatar';

    /** @var integer */
    protected $minimumDimensions = 50;

    /** @var integer */
    protected $maximumDimensions = 3000;

    /** @test */
    public function it_can_store_a_new_avatar()
    {
        $response = $this->postJson($this->url, [
            'avatar' => $this->file,
        ]);

        $response->assertSuccessful();

        Storage::disk('avatars')->assertExists($this->file->hashName());

        $this->assertDatabaseHas('images', [
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'disk'            => 'avatars',
            'filename'        => $this->file->hashName(),
            'imageable_id'    => $this->user->id,
            'imageable_type'  => User::class,
        ]);
    }

    /** @test */
    public function it_deletes_the_previous_avatar_after_uploading_a_new_one()
    {
        $originalFile = UploadedFile::fake()->image('avatar.jpg', 50, 50);

        $this->user->avatar()->create([
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'disk'            => 'avatars',
            'filename'        => Storage::disk('avatars')->putFile('/', $originalFile),
        ]);

        $response = $this->postJson($this->url, [
            'avatar' => $this->file,
        ]);

        $response->assertSuccessful();

        Storage::disk('avatars')->assertExists($this->file->hashName());
        Storage::disk('avatars')->assertMissing($originalFile->hashName());

        $this->assertDatabaseHas('images', [
            'organisation_id' => app('auth')->guard()->user()->organisation_id,
            'disk'            => 'avatars',
            'filename'        => $this->file->hashName(),
            'imageable_id'    => $this->user->id,
            'imageable_type'  => User::class,
        ]);
    }

    /** @test */
    public function if_the_user_doesnt_currently_have_an_avatar_the_default_avatar_is_not_deleted_when_a_new_avatar_is_uploaded()
    {
        $response = $this->postJson($this->url, [
            'avatar' => $this->file,
        ]);

        $response->assertSuccessful();

        Storage::disk('avatars')->assertExists('default.jpg');
    }

    protected function setUp()
    {
        parent::setUp();

        Storage::fake('avatars');
        UploadedFile::fake()->image('default.jpg')->store('default.jpg', 'avatars');

        $this->user = factory(User::class)->create();
        $this->file = UploadedFile::fake()->image('avatar.jpg', 50, 50);
        $this->url  = '/users/'.$this->user->hash_id.'/avatar';
    }
}
