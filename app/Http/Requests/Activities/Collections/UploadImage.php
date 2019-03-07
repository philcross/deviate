<?php

namespace App\Http\Requests\Activities\Collections;

use Illuminate\Http\UploadedFile;
use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Concerns\InteractsWithOrganisation;

class UploadImage extends FormRequest
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
     * Return the uploaded image
     *
     * @return UploadedFile
     */
    public function image()
    {
        return $this->file('image');
    }
}
