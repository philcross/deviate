<?php

namespace App\Http\Controllers\Web\Activities\Collections;

use App\Http\Controllers\Controller;
use App\Models\Activities\ActivityCollection;
use App\Http\Requests\Activities\Collections\DeleteCollection as Request;

class DeleteCollection extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param ActivityCollection $collection
     *
     * @return void
     *
     * @throws \Exception
     */
    public function __invoke(Request $request, ActivityCollection $collection)
    {
        $collection->delete();
    }
}
