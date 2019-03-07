<?php

namespace Tests\Feature\Web\Users\Avatars;

use Tests\TestCase;
use App\Models\Users\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group users
 * @group users-avatars
 * @group feature
 */
class DeleteAvatarTest extends TestCase
{
    use RefreshDatabase;

    /** @var User */
    protected $user;

    /** @test */
    public function an_avatar_can_be_deleted()
    {
        $filename = $this->user->avatar->filename;
        $response = $this->deleteJson('/users/'.$this->user->hash_id.'/avatar');

        $response->assertSuccessful();

        $this->assertDatabaseMissing('images', [
            'imageable_id'   => $this->user->hash_id,
            'imageable_type' => User::class,
        ]);

        Storage::disk('avatars')->assertMissing($filename);
    }

    /** @test */
    public function the_default_avatar_is_not_deleted()
    {
        $this->user->avatar()->delete();

        $response = $this->deleteJson('/users/'.$this->user->hash_id.'/avatar');

        $response->assertSuccessful();

        Storage::disk('avatars')->assertExists('default.jpg');
    }

    protected function setUp()
    {
        parent::setUp();

        Storage::fake('avatars');
        UploadedFile::fake()->image('default.jpg')->store('default.jpg', 'avatars');

        $this->user = factory(User::class)->create();

        $this->user->avatar()->create([
            'organisation_id' => $this->user->organisation_id,
            'disk'            => 'avatars',
            'filename'        => UploadedFile::fake()->image('avatar.jpg', 50, 50)->hashName(),
        ]);
    }
}
