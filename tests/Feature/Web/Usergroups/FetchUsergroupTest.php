<?php

namespace Tests\Feature\Web\Usergroups;

use Tests\TestCase;
use App\Models\Usergroups\Usergroup;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\Usergroups\Usergroup as UsergroupResource;

/**
 * @group web
 * @group usergroups
 * @group feature
 */
class FetchUsergroupTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_usergroup_can_be_retrieved()
    {
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->getJson('/usergroups/'.$usergroup->hash_id);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UsergroupResource($usergroup)
        );
    }
}
