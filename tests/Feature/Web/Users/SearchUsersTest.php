<?php

namespace Tests\Feature\Web\Users;

use Tests\TestCase;
use App\Models\Users\User;
use App\Http\Resources\Users\UserCollection;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group users
 * @group feature
 */
class SearchUsersTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_a_list_of_users()
    {
        factory(User::class, 3)->create();

        $response = $this->getJson('/users');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(User::orderBy('surname', 'asc')->orderBy('forename', 'asc')->paginate(20))
        );
    }

    /** @test */
    public function it_can_filters_users_by_a_term()
    {
        $users = factory(User::class, 3)->create();
        $term  = sprintf('%s %s', $users->first()->forename, $users->first()->surname);

        $response = $this->getJson('/users?filters[term]='.$term);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(User::orderBy('surname', 'asc')->orderBy('forename', 'asc')->searchByTerm($term)->paginate(20))
        );
    }

    /** @test */
    public function results_can_be_limited()
    {
        factory(User::class, 3)->create();

        $response = $this->getJson('/users?limit=2');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserCollection(User::orderBy('surname', 'asc')->orderBy('forename', 'asc')->paginate(2))
        );
    }
}
