<?php

namespace App\Http\Requests\Activities;

use Money\Money;
use Carbon\Carbon;
use Money\Currency;
use App\ValueObjects\DateRange;
use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Concerns\InteractsWithOrganisation;

abstract class AbstractActivityDetails extends FormRequest
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
            'name'        => ['required', 'string', 'min:2', 'max:50'],
            'description' => ['required', 'string'],
            'places'      => ['required', 'numeric', 'min:0'],
            'price'       => ['required', 'regex:/^\d*(\.\d{1,2})?$/'],
            'starts_at'   => ['required', $this->startsAtRule()],
            'ends_at'     => ['required', $this->endsAtRule(), 'after_or_equal:starts_at'],
        ];
    }

    private function startsAtRule()
    {
        return function ($attribute, $value, $fail) {
            if (!strtotime($value)) {
                return $fail('The starts at date must be a valid date.');
            }

            if ($this->dates()->start()->lt($this->route('collection')->activities_start_at)) {
                return $fail('The start date for this activity must be after or equal to the start date for the collection (' . $this->route('collection')->activities_start_at->format('l, jS F Y') . ')');
            }

            if ($this->dates()->start()->gt($this->route('collection')->activities_end_at)) {
                return $fail('The start date for this activity must be before or equal to the end date for the collection (' . $this->route('collection')->activities_end_at->format('l, jS F Y') . ')');
            }
        };
    }

    private function endsAtRule()
    {
        return function ($attribute, $value, $fail) {
            if (!strtotime($value)) {
                return $fail('The ends at date must be a valid date.');
            }

            if ($this->dates()->end()->lt($this->route('collection')->activities_start_at)) {
                return $fail('The end date for this activity must be after or equal to the start date for the collection (' . $this->route('collection')->activities_start_at->format('l, jS F Y') . ')');
            }

            if ($this->dates()->end()->gt($this->route('collection')->activities_end_at)) {
                return $fail('The end date for this activity must be before or equal to the end date for the collection (' . $this->route('collection')->activities_end_at->format('l, jS F Y') . ')');
            }
        };
    }

    /**
     * Return the start and end date range for this activity
     *
     * @return DateRange
     */
    public function dates()
    {
        return new DateRange(
            Carbon::parse($this->get('starts_at')),
            Carbon::parse($this->get('ends_at'))
        );
    }

    /**
     * Return the name of the activity
     *
     * @return string
     */
    public function name()
    {
        return $this->get('name');
    }

    /**
     * Return the description of the activity
     *
     * @return string
     */
    public function description()
    {
        return $this->get('description');
    }

    /**
     * Return the number of places available in this activity
     *
     * @return integer
     */
    public function places()
    {
        return (int)$this->get('places', 0);
    }

    /**
     * Return the price of this activity in pence
     *
     * @return Money
     */
    public function price()
    {
        return new Money((int)$this->get('price') * 100, new Currency('gbp'));
    }
}
