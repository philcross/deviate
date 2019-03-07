<?php

namespace App\Http\Requests\Users;

use App\ValueObjects\PersonName;
use Illuminate\Foundation\Http\FormRequest;

class UpdateDetails extends FormRequest
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
            'forename' => ['required', 'string', 'min:2', 'max:30'],
            'surname'  => ['required', 'string', 'min:2', 'max:30'],
            'email'    => ['required', 'email', 'unique:users,email,'.$this->route('user')->id],
            'password' => ['sometimes', 'string', 'min:6', 'confirmed'],
        ];
    }

    /**
     * Return the users name
     *
     * @return PersonName
     */
    public function name()
    {
        return new PersonName($this->get('forename'), $this->get('surname'));
    }

    /**
     * Return the users email address
     *
     * @return string
     */
    public function email()
    {
        return $this->get('email');
    }

    /**
     * Returns whether the user wants to change the password as well
     *
     * @return boolean
     */
    public function shouldUpdatePassword()
    {
        return !empty($this->get('password'));
    }

    /**
     * Returns the password to update
     *
     * @return string
     */
    public function password()
    {
        return bcrypt($this->get('password'));
    }
}
