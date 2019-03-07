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
class FetchDetailsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_return_an_organisations_details()
    {
        $response = $this->getJson('/organisation');

        $response->assertSuccessful();

        $response->assertJsonResource(
            new OrganisationResource(Organisation::first())
        );
    }
}
