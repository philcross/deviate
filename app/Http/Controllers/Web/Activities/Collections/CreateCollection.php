<?php

namespace App\Http\Controllers\Web\Activities\Collections;

use App\Http\Controllers\Controller;
use App\Models\Activities\ActivityCollection;
use App\Http\Resources\Activities\ActivityGroup;
use App\Http\Requests\Activities\Collections\CreateCollection as Request;

class CreateCollection extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return ActivityGroup
     */
    public function __invoke(Request $request)
    {
        $collection = ActivityCollection::create([
            'organisation_id'     => $request->organisationId(),
            'name'                => $request->name(),
            'description'         => $request->description(),
            'booking_opens_at'    => $request->bookings()->start(),
            'booking_closes_at'   => $request->bookings()->end(),
            'payment_opens_at'    => $request->payments()->start(),
            'payment_closes_at'   => $request->payments()->end(),
            'activities_start_at' => $request->activities()->start(),
            'activities_end_at'   => $request->activities()->end(),
            'is_hidden'           => $request->isHidden(),
        ]);

        return new ActivityGroup($collection);
    }
}
