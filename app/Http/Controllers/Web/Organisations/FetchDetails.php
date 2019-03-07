<?php

namespace App\Http\Controllers\Web\Organisations;

use App\Http\Controllers\Controller;
use App\Http\Resources\Organisations\Organisation;
use App\Http\Requests\Organisations\FetchDetails as Request;

class FetchDetails extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return Organisation
     */
    public function __invoke(Request $request)
    {
        return new Organisation($request->organisation());
    }
}
