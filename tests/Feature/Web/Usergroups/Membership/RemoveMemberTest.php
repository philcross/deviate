<?php

namespace Tests\Feature\Web\Usergroups\Membership;

use Tests\TestCase;
use App\Models\Users\User;
use App\Models\Usergroups\Usergroup;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group usergroups
 * @group usergroup-membership
 * @group feature
 */
class RemoveMemberTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_member_can_be_removed()
    {
        $user      = factory(User::class)->create();
        $usergroup = factory(Usergroup::class)->create();

        $usergroup->members()->attach($user);

        $response = $this->deleteJson('/usergroups/'.$usergroup->hash_id.'/members/'.$user->hash_id);

        $response->assertSuccessful();

        $this->assertDatabaseMissing('user_usergroup', [
            'user_id'      => $user->id,
            'usergroup_id' => $usergroup->id,
        ]);
    }

    /** @test */
    public function it_ignores_trying_to_remove_a_user_who_isnt_a_member()
    {
        $user      = factory(User::class)->create();
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->deleteJson('/usergroups/'.$usergroup->hash_id.'/members/'.$user->hash_id);

        $response->assertSuccessful();
    }
}
