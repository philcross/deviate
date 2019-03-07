<?php

namespace App\Http\Requests\Activities\Collections;

use App\ValueObjects\DateRange;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Concerns\InteractsWithOrganisation;

abstract class AbstractCollectionData extends FormRequest
{
    use InteractsWithOrganisation;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'                => ['required', 'string', 'min:2', 'max:30'],
            'description'         => ['required', 'string', 'max:500'],
            'booking_opens_at'    => ['required', 'date_format:Y-m-d\TH:i:s\.000\Z'],
            'booking_closes_at'   => ['required', 'date_format:Y-m-d\TH:i:s\.000\Z', 'after_or_equal:booking_opens_at'],
            'payment_opens_at'    => ['required', 'date_format:Y-m-d\TH:i:s\.000\Z', 'after_or_equal:booking_closes_at'],
            'payment_closes_at'   => ['required', 'date_format:Y-m-d\TH:i:s\.000\Z', 'after_or_equal:payment_opens_at'],
            'activities_start_at' => ['required', 'date_format:Y-m-d\TH:i:s\.000\Z', 'after_or_equal:payment_closes_at'],
            'activities_end_at'   => ['required', 'date_format:Y-m-d\TH:i:s\.000\Z', 'after_or_equal:activities_start_at'],
            'is_hidden'           => ['boolean'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function messages()
    {
        return [
            'booking_opens_at.required'           => 'The booking opens date is required.',
            'booking_opens_at.date_format'        => 'The booking opens date is not a valid format.',
            'payment_opens_at.required'           => 'The payment opens date is required.',
            'payment_opens_at.date_format'        => 'The payment opens date is not a valid format.',
            'payment_opens_at.after_or_equal'     => 'The payment opens date must be after the booking closes date.',
            'activities_start_at.required'        => 'The activities start date is required.',
            'activities_start_at.date_format'     => 'The activities start date is not a valid format.',
            'activities.start_at.after_or_equals' => 'The activities start date must be after the payment closes date.',

            'booking_closes_at.required'       => 'The booking closes date is required.',
            'booking_closes_at.date_format'    => 'The booking closes date is not a valid format.',
            'booking_closes_at.after_or_equal' => 'The booking closes date must be after the booking opens date.',
            'payment_closes_at.required'       => 'The payment closes date is required.',
            'payment_closes_at.date_format'    => 'The payment closes date is not a valid format.',
            'payment_closes_at.after_or_equal' => 'The payment closes date must be after the payment opens date.',
            'activities_end_at.required'       => 'The activities end date is required.',
            'activities_end_at.date_format'    => 'The activities end date is not a valid format.',
            'activities_end_at.after_or_equal' => 'The activities end date must be after the activities start date.',
        ];
    }

    /**
     * Return the name of the collection
     *
     * @return string
     */
    public function name()
    {
        return $this->get('name');
    }

    /**
     * Return the description for this collection
     *
     * @return string
     */
    public function description()
    {
        return $this->get('description');
    }

    /**
     * Return the booking date range
     *
     * @return DateRange
     */
    public function bookings()
    {
        return new DateRange(
            Carbon::parse($this->get('booking_opens_at'))->setTimeFromTimeString('00:00:00'),
            Carbon::parse($this->get('booking_closes_at'))->setTimeFromTimeString('23:59:59')
        );
    }

    /**
     * Return the payment date range
     *
     * @return DateRange
     */
    public function payments()
    {
        return new DateRange(
            Carbon::parse($this->get('payment_opens_at'))->setTimeFromTimeString('00:00:00'),
            Carbon::parse($this->get('payment_closes_at'))->setTimeFromTimeString('23:59:59')
        );
    }

    /**
     * Return the activities date range
     *
     * @return DateRange
     */
    public function activities()
    {
        return new DateRange(
            Carbon::parse($this->get('activities_start_at'))->setTimeFromTimeString('00:00:00'),
            Carbon::parse($this->get('activities_end_at'))->setTimeFromTimeString('23:59:59')
        );
    }

    /**
     * Return whether this collection is hidden
     *
     * @return boolean
     */
    public function isHidden()
    {
        return (bool)$this->get('is_hidden', 0);
    }
}
