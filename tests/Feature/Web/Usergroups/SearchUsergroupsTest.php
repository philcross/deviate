<?php

namespace Tests\Feature\Web\Usergroups;

use Tests\TestCase;
use App\Models\Usergroups\Usergroup;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\Usergroups\Search\SearchCollection;

/**
 * @group web
 * @group usergroups
 * @group feature
 */
class SearchUsergroupsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_list_of_usergroups_can_be_returned()
    {
        factory(Usergroup::class, 3)->create();

        $response = $this->getJson('/usergroups');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new SearchCollection(Usergroup::orderBy('name')->paginate(20))
        );
    }

    /** @test */
    public function usergroups_can_be_searched_by_name()
    {
        $usergroups = factory(Usergroup::class, 3)->create();

        $response = $this->getJson('/usergroups?filters[term]='.$usergroups->first()->name);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new SearchCollection(Usergroup::where('id', $usergroups->first()->id)->orderBy('name')->paginate(20))
        );
    }

    /** @test */
    public function the_number_of_usergroups_returned_can_be_limited()
    {
        factory(Usergroup::class, 3)->create();

        $response = $this->getJson('/usergroups?limit=2');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new SearchCollection(Usergroup::orderBy('name')->paginate(2))
        );
    }

    /** @test */
    public function usergroups_can_be_ordered()
    {
        factory(Usergroup::class, 3)->create();

        $response = $this->getJson('/usergroups?orders[name]=desc');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new SearchCollection(Usergroup::orderBy('name', 'desc')->paginate(20))
        );
    }
}
