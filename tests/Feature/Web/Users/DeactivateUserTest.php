<?php

namespace Tests\Feature\Web\Users;

use Tests\TestCase;
use App\Models\Users\User;
use App\Http\Resources\Users\User as UserResource;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group users
 * @group feature
 */
class DeactivateUserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_can_be_deactivated()
    {
        $user = factory(User::class)->create();

        $response = $this->patchJson('/users/' . $user->hash_id . '/deactivate');

        $response->assertSuccessful();

        $this->assertSoftDeleted('users', [
            'id' => $user->id,
        ]);

        $response->assertJsonResource(
            new UserResource($user->refresh())
        );
    }
}
