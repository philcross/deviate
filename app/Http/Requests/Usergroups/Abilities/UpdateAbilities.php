<?php

namespace App\Http\Requests\Usergroups\Abilities;

use App\Models\Usergroups\Ability;
use Illuminate\Support\Collection;
use Illuminate\Foundation\Http\FormRequest;

class UpdateAbilities extends FormRequest
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
            'abilities' => ['array'],
        ];
    }

    /**
     * Return the abilities to sync with the usergroup
     *
     * @return Collection
     */
    public function abilities()
    {
        return Ability::forHashIds($this->get('abilities', []))->get();
    }
}
