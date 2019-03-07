<?php

namespace App\Features\Users\Search;

use App\Core\Search\AbstractOrder;

class Orders extends AbstractOrder
{
    /** @var array */
    protected $defaults = [
        'surname'  => 'asc',
        'forename' => 'asc',
    ];

    /** @var array */
    protected $allowed = [
        'forename', 'surname', 'email', 'created_at', 'updated_at',
    ];
}
