<?php

namespace Tests\Feature\Helpers\Testers\Files;

use Illuminate\Http\UploadedFile;

trait TestsForImages
{
    /** @test */
    public function the_image_must_be_an_image_file()
    {
        $file = UploadedFile::fake()->create('test.txt');

        $response = $this->postJson($this->url, [
            $this->uploadFieldName => $file,
        ]);

        $response->assertValidationErrors($this->uploadFieldName);
    }

    /** @test */
    public function an_error_is_returned_if_no_image_is_uploaded()
    {
        $response = $this->postJson($this->url, [
            $this->uploadFieldName => null,
        ]);

        $response->assertValidationErrors($this->uploadFieldName);
    }
}
