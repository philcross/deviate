<?php

namespace Tests\Feature\Web\Usergroups\Membership;

use Tests\TestCase;
use App\Models\Users\User;
use App\Models\Usergroups\Usergroup;
use App\Http\Resources\Users\UserCollection;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group usergroups
 * @group usergroup-membership
 * @group feature
 */
class SearchEligibleToJoinTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_a_list_of_users_eligible_to_join_the_usergroup()
    {
        $users     = factory(User::class, 3)->create();
        $usergroup = factory(Usergroup::class)->create();

        $usergroup->members()->attach($users->first());

        $response = $this->getJson('/usergroups/'.$usergroup->hash_id.'/members/eligible');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(
                User::where('id', '!=', $users->first()->id)
                    ->orderBy('surname', 'asc')
                    ->orderBy('forename', 'asc')
                    ->paginate(20)
            )
        );
    }

    /** @test */
    public function it_can_limit_the_number_of_records_returned()
    {
        factory(User::class, 3)->create();
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->getJson('/usergroups/'.$usergroup->hash_id.'/members/eligible?limit=2');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(
                User::orderBy('surname', 'asc')
                    ->orderBy('forename', 'asc')
                    ->paginate(2)
            )
        );
    }

    /** @test */
    public function it_can_order_the_results()
    {
        factory(User::class, 3)->create();
        $usergroup = factory(Usergroup::class)->create();

        $response = $this->getJson('/usergroups/'.$usergroup->hash_id.'/members/eligible?orders[created_at]=desc');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(User::orderBy('created_at', 'desc')->paginate(20))
        );
    }

    /** @test */
    public function it_can_filter_results()
    {
        $users     = factory(User::class, 3)->create();
        $usergroup = factory(Usergroup::class)->create();

        $term = sprintf('%s %s', $users->first()->forename, $users->first()->surname);
        $response = $this->getJson('/usergroups/'.$usergroup->hash_id.'/members/eligible?filters[term]='.$term);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(User::where('id', $users->first()->id)->paginate(20))
        );
    }
}
