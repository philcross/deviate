<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;
use App\Exceptions\Users\UserMustBeDeactivatedBeforeDeleting;

class DeleteUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     *
     * @throws UserMustBeDeactivatedBeforeDeleting
     */
    public function authorize()
    {
        if (!$this->route('user')->trashed()) {
            throw new UserMustBeDeactivatedBeforeDeleting;
        }

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [];
    }
}
