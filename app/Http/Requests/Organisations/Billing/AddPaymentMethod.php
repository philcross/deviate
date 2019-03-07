<?php

namespace App\Http\Requests\Organisations\Billing;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Concerns\InteractsWithOrganisation;

class AddPaymentMethod extends FormRequest
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
            'token' => ['required', 'string'],
        ];
    }

    /**
     * Return the stripe token to create the payment method
     *
     * @return string
     */
    public function token()
    {
        return $this->get('token', '');
    }
}
