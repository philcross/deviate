<?php

namespace Tests\Unit\Core\Search;

use App\Core\Search\AbstractFilter;
use Illuminate\Support\Str;

class MockFilter extends AbstractFilter
{
    /** @var array */
    protected $filters = [];

    /** @var array  */
    protected $map = [
        'name' => 'filterName',
    ];

    public function sanitizeName($value)
    {
        return Str::studly($value);
    }
}
