<?php

namespace Tests\Feature\Web\Organisations;

use Tests\TestCase;
use App\Models\Organisations\Organisation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\Organisations\Organisation as OrganisationResource;

/**
 * @group web
 * @group organisations
 * @group feature
 */
class UpdateDetailsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_organisations_details_can_be_updated()
    {
        $organisation = Organisation::first();

        $response = $this->putJson('/organisation', [
            'name' => 'Citrium',
            'slug' => 'citrium test',
        ]);

        $response->assertSuccessful();

        $response->assertJsonResource(new OrganisationResource($organisation->refresh()));

        $this->assertDatabaseHas('organisations', [
            'id'   => $organisation->id,
            'name' => 'Citrium',
            'slug' => 'citrium-test',
        ]);
    }

    /** @test */
    public function an_error_is_returned_if_the_details_are_invalid()
    {
        $response = $this->putJson('/organisation', [
            'name' => '',
            'slug' => '',
        ]);

        $response->assertValidationErrors('name', 'slug');
    }

    /** @test */
    public function an_error_is_returned_if_the_updated_slug_is_not_unique()
    {
        $organisation = factory(Organisation::class)->create();

        $response = $this->putJson('/organisation', [
            'name' => 'Test Organisation',
            'slug' => $organisation->slug,
        ]);

        $response->assertValidationErrors('slug');
    }
}
