<?php

namespace Tests\Feature\Web\Registration;

use Tests\TestCase;
use App\Models\Users\User;
use App\Jobs\Payments\CreateCustomer;
use Illuminate\Support\Facades\Queue;
use App\Models\Organisations\Organisation;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group web
 * @group registration
 * @group feature
 */
class RegisterTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_can_register()
    {
        Queue::fake();

        $response = $this->postJson('/register', [
            'forename'     => 'Phil',
            'surname'      => 'Cross',
            'email'        => 'phil@deviate.test',
            'password'     => 'secret',
            'organisation' => 'Deviate Test'
        ]);

        $response->assertSuccessful();

        $this->assertDatabaseHas('users', [
            'organisation_id' => Organisation::whereSlug('deviate-test')->first()->id,
            'forename'        => 'Phil',
            'surname'         => 'Cross',
            'email'           => 'phil@deviate.test',
        ]);

        $this->assertDatabaseHas('organisations', [
            'name' => 'Deviate Test',
            'slug' => 'deviate-test',
        ]);

        $this->assertDatabaseHas('super_users', [
            'organisation_id' => Organisation::whereSlug('deviate-test')->first()->id,
            'user_id'         => User::whereEmail('phil@deviate.test')->first()->id,
        ]);
    }

    /** @test */
    public function an_error_is_returned_if_the_form_details_are_invalid()
    {
        $response = $this->postJson('/register', [
            'forename'     => '',
            'surname'      => '',
            'email'        => '',
            'password'     => '',
            'organisation' => '',
        ]);

        $response->assertValidationErrors('forename', 'surname', 'email', 'password', 'organisation');
    }

    /** @test */
    public function it_returns_an_error_if_the_organisation_name_is_already_taken()
    {
        $response = $this->postJson('/register', [
            'forename'     => 'Phil',
            'surname'      => 'Cross',
            'email'        => 'phil@citrium.test',
            'password'     => 'secret',
            'organisation' => 'Deviate',
        ]);

        $response->assertValidationErrors('organisation');
    }

    /** @test */
    public function when_a_user_register_they_are_queued_to_be_added_to_the_payment_provider_as_well()
    {
        Queue::fake();

        $response = $this->postJson('/register', [
            'forename'     => 'Phil',
            'surname'      => 'Cross',
            'email'        => 'phil@deviate.test',
            'password'     => 'secret',
            'organisation' => 'Deviate Test'
        ]);

        $response->assertSuccessful();

        Queue::assertPushedOn('payments', CreateCustomer::class);
    }
}
