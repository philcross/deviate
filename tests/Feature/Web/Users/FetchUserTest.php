<?php

namespace Tests\Feature\Web\Users;

use Tests\TestCase;
use App\Models\Users\User;
use App\Http\Resources\Users\User as UserResource;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group users
 * @group feature
 */
class FetchUserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_retrieve_a_users_details()
    {
        $user = factory(User::class)->create();

        $response = $this->getJson('/users/'.$user->hash_id);

        $response->assertSuccessful();

        $response->assertJsonResource(new UserResource($user));
    }
}
