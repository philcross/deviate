<?php

namespace App\Http\Requests\Users;

use App\Features\Users\Search\Filters;
use App\Features\Users\Search\Orders;
use Illuminate\Foundation\Http\FormRequest;
use App\Core\Search\RequestTrait as SearchTrait;
use App\Http\Requests\Concerns\InteractsWithOrganisation;

class SearchUsers extends FormRequest
{
    use SearchTrait,
        InteractsWithOrganisation;

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
