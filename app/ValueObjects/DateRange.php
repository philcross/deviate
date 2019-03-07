<?php

namespace App\ValueObjects;

use Carbon\Carbon;

class DateRange
{
    /** @var \Carbon\Carbon */
    private $start;

    /** @var \Carbon\Carbon */
    private $end;

    /**
     * Constructor
     *
     * @param \Carbon\Carbon $start
     * @param \Carbon\Carbon $end
     */
    public function __construct(Carbon $start, Carbon $end)
    {
        $this->start = $start;
        $this->end   = $end;
    }

    /**
     * Return the start date
     *
     * @return \Carbon\Carbon
     */
    public function start()
    {
        return $this->start;
    }

    /**
     * Return the end date
     *
     * @return \Carbon\Carbon
     */
    public function end()
    {
        return $this->end;
    }
}
