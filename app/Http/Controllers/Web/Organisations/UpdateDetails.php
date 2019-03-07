<?php

namespace App\Http\Controllers\Web\Organisations;

use App\Http\Controllers\Controller;
use App\Http\Resources\Organisations\Organisation;
use App\Http\Requests\Organisations\UpdateDetails as Request;

class UpdateDetails extends Controller
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
        $request->organisation()->update([
            'name' => $request->name(),
            'slug' => $request->slug(),
        ]);

        return new Organisation($request->organisation()->refresh());
    }
}
