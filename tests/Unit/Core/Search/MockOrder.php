<?php

namespace Tests\Unit\Core\Search;

use App\Core\Search\AbstractOrder;

class MockOrder extends AbstractOrder
{
    /** @var array */
    protected $defaults = [
        'surname'  => 'asc',
        'forename' => 'asc',
    ];

    /** @var array */
    protected $allowed = [
        'forename', 'surname',
    ];
}
