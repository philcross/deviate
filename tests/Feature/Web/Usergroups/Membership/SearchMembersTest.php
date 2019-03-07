<?php

namespace Tests\Feature\Web\Usergroups\Membership;

use Tests\TestCase;
use App\Models\Users\User;
use App\Models\Usergroups\Usergroup;
use App\Http\Resources\Users\UserCollection;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group usergroups
 * @group usergroup-membership
 * @group feature
 */
class SearchMembersTest extends TestCase
{
    use RefreshDatabase;

    /** @var Collection */
    private $users;

    /** @var Usergroup */
    private $usergroup;

    /** @test */
    public function a_list_of_members_can_be_returned()
    {
        $response = $this->getJson('/usergroups/'.$this->usergroup->hash_id.'/members');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(User::whereIn('id', $this->users->pluck('id'))->orderBy('surname', 'asc')->orderBy('forename', 'asc')->paginate(20))
        );
    }

    /** @test */
    public function the_number_of_records_returned_can_be_limited()
    {
        $response = $this->getJson('/usergroups/'.$this->usergroup->hash_id.'/members?limit=2');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(User::whereIn('id', $this->users->pluck('id'))->orderBy('surname', 'asc')->orderBy('forename', 'asc')->paginate(2))
        );
    }

    /** @test */
    public function results_can_be_ordered()
    {
        $response = $this->getJson('/usergroups/'.$this->usergroup->hash_id.'/members?orders[created_at]=desc');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(User::whereIn('id', $this->users->pluck('id'))->orderBy('created_at', 'desc')->paginate(20))
        );
    }

    /** @test */
    public function results_can_be_filtered_by_name()
    {
        $term = sprintf('%s %s', $this->users->first()->forename, $this->users->first()->surname);
        $response = $this->getJson('/usergroups/'.$this->usergroup->hash_id.'/members?filters[term]='.$term);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(User::where('id', $this->users->first()->id)->paginate(20))
        );
    }

    /** @test */
    public function results_can_be_filtered_by_email()
    {
        $response = $this->getJson('/usergroups/'.$this->usergroup->hash_id.'/members?filters[term]='.$this->users->first()->email);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(User::where('id', $this->users->first()->id)->paginate(20))
        );
    }

    protected function setUp()
    {
        parent::setUp();

        $this->users     = factory(User::class, 3)->create();
        $this->usergroup = factory(Usergroup::class)->create();

        $this->usergroup->members()->sync($this->users);
    }
}
