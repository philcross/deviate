<?php

namespace Tests\Feature\Web\Users\Avatars;

use Tests\TestCase;
use App\Models\Users\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group users
 * @group users-avatars
 * @group feature
 */
class FetchAvatarTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_a_users_avatar()
    {
        $user = factory(User::class)->create();

        $response = $this->get('/users/'.$user->hash_id.'/avatar');

        $response->assertSuccessful();
    }
}
