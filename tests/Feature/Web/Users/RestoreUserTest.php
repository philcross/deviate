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
class RestoreUserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_deactivated_user_can_be_restored()
    {
        $user = factory(User::class)->state('deactivated')->create();

        $response = $this->patchJson('/users/'.$user->hash_id.'/restore');

        $response->assertSuccessful();

        $this->assertDatabaseHas('users', [
            'id'         => $user->id,
            'deleted_at' => null,
        ]);

        $response->assertJsonResource(
            new UserResource($user->refresh())
        );
    }
}
