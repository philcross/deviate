<?php

namespace App\Http\Requests\Usergroups;

use App\Features\Usergroups\Search\Orders;
use App\Features\Usergroups\Search\Filters;
use Illuminate\Foundation\Http\FormRequest;
use App\Core\Search\RequestTrait as SearchTrait;

class SearchUsergroups extends FormRequest
{
    use SearchTrait;

    const SEARCH_FILTER = Filters::class;
    const SEARCH_ORDER = Orders::class;

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
            //
        ];
    }
}
