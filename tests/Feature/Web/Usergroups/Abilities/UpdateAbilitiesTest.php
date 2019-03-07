<?php

namespace Tests\Feature\Web\Usergroups\Abilities;

use Tests\TestCase;
use App\Models\Usergroups\Ability;
use App\Models\Usergroups\Usergroup;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group usergroups
 * @group usergroup-abilities
 * @group feature
 */
class UpdateAbilitiesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function abilities_can_be_updated()
    {
        $usergroup = factory(Usergroup::class)->create();
        $abilities = factory(Ability::class, 2)->create();

        $usergroup->abilities()->attach($abilities->get(0));

        $response = $this->putJson('/usergroups/'.$usergroup->hash_id.'/abilities', [
            'abilities' => [
                $abilities->get(1)->hash_id,
            ]
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseMissing('ability_usergroup', [
            'ability_id'   => $abilities->get(0)->id,
            'usergroup_id' => $usergroup->id,
        ]);

        $this->assertDatabaseHas('ability_usergroup', [
            'ability_id'   => $abilities->get(1)->id,
            'usergroup_id' => $usergroup->id,
        ]);
    }

    /** @test */
    public function if_trying_to_grant_an_ability_that_doesnt_exist_it_is_ignored()
    {
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->putJson('/usergroups/'.$usergroup->hash_id.'/abilities', [
            'abilities' => [
                'invalid-id',
            ],
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseMissing('ability_usergroup', [
            'ability_id'   => 'invalid-id',
            'usergroup_id' => $usergroup->id,
        ]);
    }
}
