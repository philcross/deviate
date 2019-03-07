<?php

namespace Tests\Feature\Web\Usergroups;

use Tests\TestCase;
use App\Models\Usergroups\Usergroup;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group usergroups
 * @group feature
 */
class DeleteUsergroupTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_usergroup_can_be_deleted()
    {
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->deleteJson('/usergroups/'.$usergroup->hash_id);

        $response->assertSuccessful();

        $this->assertDatabaseMissing('usergroups', [
            'id' => $usergroup->id,
        ]);
    }
}
