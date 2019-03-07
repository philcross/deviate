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
class CreateUsergroupTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_usergroup_can_be_created()
    {
        $response = $this->postJson('/usergroups', [
            'organisation_id' => app('auth')->user()->organisation_id,
            'name'            => 'Test Usergroup',
            'description'     => 'This is a test usergroup',
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseHas('usergroups', [
            'name'        => 'Test Usergroup',
            'description' => 'This is a test usergroup',
        ]);
    }

    /** @test */
    public function the_usergroup_resource_is_returned_when_a_usergroup_is_created()
    {
        $response = $this->postJson('/usergroups', [
            'name'        => 'Test Usergroup',
            'description' => 'This is a test usergroup',
        ]);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UsergroupResource(Usergroup::whereName('Test Usergroup')->first())
        );
    }

    /** @test */
    public function a_validation_error_is_returned_if_the_usergroup_data_is_invalid()
    {
        $response = $this->postJson('/usergroups', []);

        $response->assertValidationErrors('name', 'description');
    }

    /** @test */
    public function a_usergroup_name_must_be_unique()
    {
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->postJson('/usergroups', [
            'name'        => $usergroup->name,
            'description' => 'This is a test description',
        ]);

        $response->assertValidationErrors('name');
    }
}
