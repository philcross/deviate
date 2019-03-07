<?php

namespace App\Http\Requests\Organisations;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Concerns\InteractsWithOrganisation;

class UpdateDetails extends FormRequest
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
            'name' => ['required', 'string', 'min:3', 'max:40'],
            'slug' => ['required', 'string', 'min:3', 'max:40', 'unique:organisations,slug,'.$this->organisationId()],
        ];
    }

    /**
     * Return the name of the organisation
     *
     * @return string
     */
    public function name()
    {
        return $this->get('name');
    }

    /**
     * Return the slug for the organisation
     *
     * @return string
     */
    public function slug()
    {
        return Str::slug($this->get('slug'));
    }
}
