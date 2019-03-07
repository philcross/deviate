<?php

namespace Tests\Feature\Web\Users\Usergroups;

use Tests\TestCase;
use App\Models\Users\User;
use App\Models\Usergroups\Usergroup;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group users
 * @group users-usergroups
 * @group feature
 */
class UpdateUsergroupsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_users_usergroups_can_be_updated()
    {
        $user = factory(User::class)->create();
        $usergroups = factory(Usergroup::class, 2)->create();

        $response = $this->putJson('/users/'.$user->hash_id.'/usergroups', [
            'usergroups' => $usergroups->pluck('hash_id')->toArray(),
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseHas('user_usergroup', [
            'user_id' => $user->id,
            'usergroup_id' => $usergroups->first()->id,
        ]);

        $this->assertDatabaseHas('user_usergroup', [
            'user_id' => $user->id,
            'usergroup_id' => $usergroups->last()->id,
        ]);
    }

    /** @test */
    public function usergroups_which_dont_exists_are_ignored()
    {
        $user = factory(User::class)->create();

        $response = $this->putJson('/users/'.$user->hash_id.'/usergroups', [
            'usergroups' => [
                1,
            ],
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseMissing('user_usergroup', [
            'usergroup_id' => 1,
        ]);
    }
}
