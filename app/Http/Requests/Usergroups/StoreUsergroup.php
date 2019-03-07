<?php

namespace App\Http\Requests\Usergroups;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Concerns\InteractsWithOrganisation;

class StoreUsergroup extends FormRequest
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
            'name'        => ['required', 'string', 'max:30', 'unique:usergroups'],
            'description' => ['required', 'max:500'],
        ];
    }

    /**
     * Return the name of this usergroup
     *
     * @return string
     */
    public function name()
    {
        return $this->get('name');
    }

    /**
     * Return the description of the usergroup
     *
     * @return string
     */
    public function description()
    {
        return $this->get('description');
    }
}
