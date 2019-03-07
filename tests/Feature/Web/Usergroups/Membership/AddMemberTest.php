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
class AddMemberTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_new_member_can_be_added()
    {
        $user      = factory(User::class)->create();
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->postJson('/usergroups/'.$usergroup->hash_id.'/members/'.$user->hash_id);

        $response->assertSuccessful();

        $this->assertDatabaseHas('user_usergroup', [
            'user_id'      => $user->id,
            'usergroup_id' => $usergroup->id,
        ]);
    }

    /** @test */
    public function trying_to_add_an_existing_member_will_be_ignored()
    {
        $user      = factory(User::class)->create();
        $usergroup = factory(Usergroup::class)->create();

        $usergroup->members()->attach($user);

        $response = $this->postJson('/usergroups/'.$usergroup->hash_id.'/members/'.$user->hash_id);

        $response->assertSuccessful();
    }
}
