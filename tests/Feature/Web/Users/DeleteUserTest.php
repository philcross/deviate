<?php

namespace Tests\Feature\Web\Users;

use Tests\TestCase;
use App\Models\Users\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group users
 * @group feature
 */
class DeleteUserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_deactivated_user_can_be_deleted()
    {
        $user = factory(User::class)->state('deactivated')->create();

        $response = $this->deleteJson('/users/'.$user->hash_id);

        $response->assertSuccessful();

        $this->assertDatabaseMissing('users', [
            'id' => $user->id,
        ]);
    }

    /** @test */
    public function an_error_is_returned_if_the_user_is_not_deactivated_first()
    {
        $user = factory(User::class)->create();

        $response = $this->deleteJson('/users/'.$user->hash_id);

        $response->assertException(2001);
    }
}
