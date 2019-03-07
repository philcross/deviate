<?php

namespace Tests\Feature\Web\Users\Usergroups;

use Tests\TestCase;
use App\Models\Users\User;
use App\Models\Usergroups\Usergroup;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\Usergroups\UsergroupCollection;

/**
 * @group web
 * @group users
 * @group users-usergroups
 * @group feature
 */
class FetchUsergroupsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_a_users_usergroups()
    {
        $user       = factory(User::class)->create();
        $usergroups = factory(Usergroup::class, 2)->create();

        $user->usergroups()->sync($usergroups);

        $response = $this->getJson('/users/'.$user->hash_id.'/usergroups');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UsergroupCollection($user->usergroups)
        );
    }
}
