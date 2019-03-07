<?php

namespace App\Features\Users\Search;

use App\Core\Search\AbstractFilter;

class Filters extends AbstractFilter
{
    /** @var array  */
    protected $map = [
        'term' => 'searchByTerm',
    ];
}
