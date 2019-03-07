<?php

namespace Tests\Feature\Web\Abilities;

use Tests\TestCase;
use App\Models\Usergroups\Ability;
use App\Models\Usergroups\AbilityGroup;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\Usergroups\AbilityGroupCollection;

/**
 * @group web
 * @group abilities
 * @group feature
 */
class ListAbilitiesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_a_list_of_all_ability_groups_and_their_abilities()
    {
        factory(Ability::class, 3)->create();

        $response = $this->getJson('/abilities');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new AbilityGroupCollection(AbilityGroup::orderBy('name')->with('abilities')->get())
        );
    }
}
