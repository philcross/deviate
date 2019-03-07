<?php

namespace App\Http\Requests\Users\Usergroup;

use App\Models\Usergroups\Usergroup;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Database\Eloquent\Collection;

class UpdateUsergroups extends FormRequest
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
        return [
            'usergroups' => ['array'],
        ];
    }

    /**
     * Return an array of usergroups to sync with the user
     *
     * @return Collection
     */
    public function usergroups()
    {
        return Usergroup::forHashIds($this->get('usergroups', []))->get();
    }
}
