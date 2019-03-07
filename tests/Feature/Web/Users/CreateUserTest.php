<?php

namespace Tests\Feature\Web\Users;

use Tests\TestCase;
use App\Models\Users\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\Users\User as UserResource;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group users
 * @group feature
 */
class CreateUserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_store_a_new_user()
    {
        $response = $this->postJson('/users', [
            'forename'              => 'Brody',
            'surname'               => 'Cross',
            'email'                 => 'brody@deviate.test',
            'password'              => 'secret',
            'password_confirmation' => 'secret',
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseHas('users', [
            'organisation_id' => app('auth')->user()->organisation_id,
            'forename'        => 'Brody',
            'surname'         => 'Cross',
            'email'           => 'brody@deviate.test',
        ]);

        $this->assertTrue(Hash::check('secret', User::whereEmail('brody@deviate.test')->first()->password));
    }

    /** @test */
    public function it_returns_a_user_resource_once_created()
    {
        $response = $this->postJson('/users', [
            'forename'              => 'Brody',
            'surname'               => 'Cross',
            'email'                 => 'brody@deviate.test',
            'password'              => 'secret',
            'password_confirmation' => 'secret',
        ]);

        $response->assertSuccessful();

        $response->assertJsonResource(
            new UserResource(User::whereEmail('brody@deviate.test')->first())
        );
    }

    /** @test */
    public function an_error_is_returned_if_the_details_are_invalid()
    {
        $response = $this->postJson('/users', [
            'forename'              => '',
            'surname'               => '',
            'email'                 => '',
            'password'              => '',
            'password_confirmation' => '',
        ]);

        $response->assertValidationErrors('forename', 'surname', 'email', 'password');
    }

    /** @test */
    public function the_email_must_be_unique()
    {
        $user = factory(User::class)->create();

        $response = $this->postJson('/users', [
            'forename'              => 'Brody',
            'surname'               => 'Cross',
            'email'                 => $user->email,
            'password'              => 'secret',
            'password_confirmation' => 'secret',
        ]);

        $response->assertValidationErrors('email');
    }

    /** @test */
    public function the_password_must_be_at_least_6_characters()
    {
        $response = $this->postJson('/users', [
            'forename'              => 'Brody',
            'surname'               => 'Cross',
            'email'                 => 'brody@deviate.test',
            'password'              => 'fail',
            'password_confirmation' => 'fail',
        ]);

        $response->assertValidationErrors('password');
    }

    /** @test */
    public function the_password_must_be_confirmed()
    {
        $response = $this->postJson('/users', [
            'forename'              => 'Brody',
            'surname'               => 'Cross',
            'email'                 => 'brody@deviate.test',
            'password'              => 'secret1',
            'password_confirmation' => 'secret2',
        ]);

        $response->assertValidationErrors('password');
    }
}
