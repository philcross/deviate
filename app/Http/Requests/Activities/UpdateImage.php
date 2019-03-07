<?php

namespace App\Http\Requests\Activities;

use App\Http\Requests\Concerns\InteractsWithOrganisation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\UploadedFile;

class UpdateImage extends FormRequest
{
    use InteractsWithOrganisation;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'image' => ['required', 'image', 'dimensions:min_width=50,min_height=50,max_width=3000,max_height=3000'],
        ];
    }

    /**
     * Return the image to upload
     *
     * @return UploadedFile
     */
    public function image()
    {
        return $this->file('image');
    }
}
