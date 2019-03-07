<?php

namespace App\Features\Usergroups\Search;

use App\Core\Search\AbstractFilter;

class Filters extends AbstractFilter
{
    /** @var array  */
    protected $map = [
        'term' => 'search',
    ];
}
