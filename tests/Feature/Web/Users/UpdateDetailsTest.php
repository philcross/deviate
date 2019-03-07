<?php

namespace Tests\Feature\Web\Users;

use Tests\TestCase;
use App\Models\Users\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group users
 * @group feature
 */
class UpdateDetailsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_users_core_details_can_be_updated()
    {
        $user = factory(User::class)->create();

        $response = $this->putJson('/users/'.$user->hash_id, [
            'forename' => 'Brody',
            'surname'  => 'Cross',
            'email'    => 'brody@deviate.test',
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseHas('users', [
            'id'       => $user->id,
            'forename' => 'Brody',
            'surname'  => 'Cross',
            'email'    => 'brody@deviate.test',
        ]);
    }

    /** @test */
    public function an_error_is_returned_if_the_data_is_invalid()
    {
        $user = factory(User::class)->create();

        $response = $this->putJson('/users/'.$user->hash_id, [
            'forename' => '',
            'surname'  => '',
            'email'    => '',
        ]);

        $response->assertValidationErrors('forename', 'surname', 'email');
    }

    /** @test */
    public function an_error_is_returned_if_the_email_is_not_unique()
    {
        $users = factory(User::class, 2)->create();

        $response = $this->putJson('/users/'.$users->first()->hash_id, [
            'forename' => 'Brody',
            'surname'  => 'Cross',
            'email'    => $users->last()->email,
        ]);

        $response->assertValidationErrors('email');
    }
}
