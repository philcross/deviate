<?php

namespace Tests;

use App\Models\Users\User;
use Illuminate\Support\Arr;
use PHPUnit\Framework\Assert as PHPUnit;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Foundation\Testing\TestResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function setUp()
    {
        parent::setUp();

        $this->createValidationAssertion();
        $this->createJsonResourceAssertion();
        $this->createExceptionAssertion();

        $uses = array_flip(class_uses_recursive(static::class));

        if (in_array(RefreshDatabase::class, $uses)) {
            $user = factory(User::class)->create();
            $this->actingAs($user);

            $this->seed(\AbilitySeeder::class);
        }
    }

    /**
     * Create a API resource assertion
     */
    private function createJsonResourceAssertion()
    {
        TestResponse::macro('assertJsonResource', function (JsonResource $resource) {
            $expectedPayload = $resource->toResponse(null);

            $this->assertExactJson(
                json_decode($expectedPayload->getContent(), true)
            );
        });
    }

    /**
     * Create an API Validation assertion
     */
    private function createValidationAssertion()
    {
        TestResponse::macro('assertValidationErrors', function ($keys) {
            $keys = is_array($keys) ? $keys : func_get_args();

            $this->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

            $errors = array_get($this->json(), 'additional.errors', []);

            foreach (Arr::wrap($keys) as $key) {
                PHPUnit::assertTrue(
                    isset($errors[$key]),
                    "Failed to find a validation error in the response for key: '{$key}'"
                );
            }

            return $this;
        });
    }

    /**
     * Create the exception assertion
     */
    private function createExceptionAssertion()
    {
        TestResponse::macro('assertException', function ($code = null, array $overwrite = []) {
            if (!array_has($this->original, 'code')) {
                PHPUnit::fail('An exception with code ' . $code . ' was not thrown.');
                return;
            }

            PHPUnit::assertEquals($code, $this->original['code']);

            $this->assertStatus(config('exceptions.' . $code . '.status'));

            $data = array_merge([
                'status' => config('exceptions.' . $code . '.status'),
                'code'   => $code,
                'title'  => config('exceptions.' . $code . '.title'),
                'details' => config('exceptions.' . $code . '.details'),
            ], $overwrite);

            $this->assertJsonFragment($data);
        });
    }
}
