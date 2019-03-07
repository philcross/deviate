<?php

namespace Tests\Feature\Web\Usergroups;

use Tests\TestCase;
use App\Models\Usergroups\Usergroup;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\Usergroups\Usergroup as UsergroupResource;

/**
 * @group web
 * @group usergroups
 * @group feature
 */
class UpdateUsergroupTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_usergroup_can_be_updated()
    {
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->putJson('/usergroups/'.$usergroup->hash_id, [
            'name'        => 'Test Usergroup',
            'description' => 'This is a test usergroup',
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseHas('usergroups', [
            'id'          => $usergroup->id,
            'name'        => 'Test Usergroup',
            'description' => 'This is a test usergroup',
        ]);
    }

    /** @test */
    public function the_usergroup_response_is_returned_after_updating()
    {
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->putJson('/usergroups/'.$usergroup->hash_id, [
            'name'        => 'Test Usergroup',
            'description' => 'This is a test usergroup',
        ]);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UsergroupResource($usergroup->refresh())
        );
    }

    /** @test */
    public function a_validation_error_is_returned_if_the_data_is_invalid()
    {
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->putJson('/usergroups/'.$usergroup->hash_id, []);

        $response->assertValidationErrors('name', 'description');
    }

    /** @test */
    public function a_validation_error_is_returned_if_the_usergroup_name_is_already_taken()
    {
        /** @var Collection $usergroups */
        $usergroups = factory(Usergroup::class, 2)->create();

        $response = $this->putJson('/usergroups/'.$usergroups->first()->hash_id, [
            'name'        => $usergroups->last()->name,
            'description' => 'This is a test usergroup',
        ]);

        $response->assertValidationErrors('name');
    }
}
