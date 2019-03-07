<?php

namespace App\Features\Usergroups\Search;

use App\Core\Search\AbstractOrder;

class Orders extends AbstractOrder
{
    /** @var array */
    protected $defaults = [
        'name' => 'asc',
    ];

    /** @var array */
    protected $allowed = [
        'name',
    ];
}
