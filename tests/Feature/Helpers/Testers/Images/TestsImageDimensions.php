<?php

namespace Tests\Feature\Helpers\Testers\Images;

use Illuminate\Http\UploadedFile;

trait TestsImageDimensions
{
    /** @test */
    public function the_image_must_be_bigger_than_the_minimum_allowed_dimensions()
    {
        $file = UploadedFile::fake()->image('test.jpg', $this->minimumDimensions-1, $this->minimumDimensions-1);

        $response = $this->postJson($this->url, [
            $this->uploadFieldName => $file,
        ]);

        $response->assertValidationErrors($this->uploadFieldName);
    }

    /** @test */
    public function the_image_must_be_smaller_than_the_maximum_allowed_dimensions()
    {
        $file = UploadedFile::fake()->image('test.jpg', $this->maximumDimensions+1, $this->maximumDimensions+1);

        $response = $this->postJson($this->url, [
            $this->uploadFieldName => $file,
        ]);

        $response->assertValidationErrors($this->uploadFieldName);
    }
}
