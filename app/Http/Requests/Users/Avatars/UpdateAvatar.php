<?php

namespace App\Http\Requests\Users\Avatars;

use App\Http\Requests\Concerns\InteractsWithOrganisation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\UploadedFile;

class UpdateAvatar extends FormRequest
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
            'avatar' => ['required', 'image', 'dimensions:min_width=50,min_height=50,max_width=3000,max_height=3000'],
        ];
    }

    /**
     * Return the avatar file to be uploaded
     *
     * @return UploadedFile
     */
    public function avatar()
    {
        return $this->file('avatar');
    }
}
