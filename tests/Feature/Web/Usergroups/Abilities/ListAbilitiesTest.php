<?php

namespace Tests\Feature\Web\Usergroups\Abilities;

use Tests\TestCase;
use App\Models\Usergroups\Ability;
use App\Models\Usergroups\Usergroup;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\Usergroups\AbilityCollection;

/**
 * @group web
 * @group usergroups
 * @group usergroup-abilities
 * @group feature
 */
class ListAbilitiesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_list_all_the_enabled_abilities_of_a_usergroup()
    {
        $usergroup = factory(Usergroup::class)->create();
        $abilities = factory(Ability::class, 2)->create();

        $usergroup->abilities()->attach($abilities->first());

        $response = $this->getJson('/usergroups/'.$usergroup->hash_id.'/abilities');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new AbilityCollection(Ability::where('id', $abilities->first()->id)->get())
        );
    }
}
