<?php

namespace App\Http\Requests\Registration;

use App\Models\Organisations\Organisation;
use App\ValueObjects\PersonName;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Register extends FormRequest
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
        $uniqueSlugRule = function ($attribute, $value, $fail) {
            $slug = Str::slug($value);

            if (Organisation::whereSlug($slug)->exists()) {
                $fail('The organisation name ' . $value . ' has already been taken.');
            }
        };

        return [
            'forename'     => ['required', 'string', 'min:2', 'max:30'],
            'surname'      => ['required', 'string', 'min:2', 'max:30'],
            'email'        => ['required', 'email', 'unique:users'],
            'password'     => ['required', 'string', 'min:6'],
            'organisation' => ['required', 'string', $uniqueSlugRule],
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
     * Return the users encrypted password
     *
     * @return string
     */
    public function password()
    {
        return bcrypt($this->get('password'));
    }

    /**
     * Return the name for this new organisation
     *
     * @return string
     */
    public function organisation()
    {
        return $this->get('organisation');
    }

    /**
     * Return the slug for the organisation name
     *
     * @return string
     */
    public function slug()
    {
        return Str::slug($this->get('organisation'));
    }
}
