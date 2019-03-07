<?php

namespace App\Http\Requests\Activities;

class UpdateActivityDetails extends AbstractActivityDetails
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
}
