<?php

namespace Tests\Feature\Web\Users;

use Tests\TestCase;
use App\Models\Users\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group users
 * @group feature
 */
class UpdatePasswordTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_password_can_be_updated()
    {
        $user = factory(User::class)->create();

        $response = $this->putJson('/users/'.$user->hash_id, [
            'forename'              => 'Brody',
            'surname'               => 'Cross',
            'email'                 => 'brody@deviate.test',
            'password'              => 'testpassword',
            'password_confirmation' => 'testpassword',
        ]);

        $response->assertSuccessful();

        $this->assertTrue(Hash::check('testpassword', $user->fresh()->password));
    }

    /** @test */
    public function it_will_return_an_error_if_the_confirmation_password_does_not_match()
    {
        $user = factory(User::class)->create();

        $response = $this->putJson('/users/'.$user->hash_id, [
            'forename'              => 'Brody',
            'surname'               => 'Cross',
            'email'                 => 'brody@deviate.test',
            'password'              => 'testpassword',
            'password_confirmation' => 'testpassword1',
        ]);

        $response->assertValidationErrors('password');
    }

    /** @test */
    public function the_password_is_not_updated_if_a_password_is_not_provided()
    {
        $user = factory(User::class)->create();

        $response = $this->putJson('/users/'.$user->hash_id, [
            'forename'              => 'Brody',
            'surname'               => 'Cross',
            'email'                 => 'brody@deviate.test',
            'password'              => '',
            'password_confirmation' => '',
        ]);

        $response->assertSuccessful();

        $this->assertTrue(Hash::check('secret', $user->fresh()->password));
    }

    /** @test */
    public function an_error_is_returned_if_the_password_is_too_short()
    {
        $user = factory(User::class)->create();

        $response = $this->putJson('/users/'.$user->hash_id, [
            'forename'              => 'Brody',
            'surname'               => 'Cross',
            'email'                 => 'brody@deviate.test',
            'password'              => 'fail',
            'password_confirmation' => 'fail',
        ]);

        $response->assertValidationErrors('password');
    }
}
