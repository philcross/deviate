<?php

namespace App\Http\Requests\Usergroups;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUsergroup extends FormRequest
{
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
        $usergroup = $this->route('usergroup')->id;

        return [
            'name'        => ['required', 'string', 'max:30', 'unique:usergroups,name,'.$usergroup],
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
