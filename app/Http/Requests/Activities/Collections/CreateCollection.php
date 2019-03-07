<?php

namespace App\Http\Requests\Activities\Collections;

class CreateCollection extends AbstractCollectionData
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
