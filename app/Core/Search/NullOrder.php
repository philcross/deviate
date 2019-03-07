<?php

namespace App\Core\Search;

class NullOrder extends AbstractOrder
{
    /** @var array */
    protected $defaults = [
        'created_at' => 'desc'
    ];

    /** @var array */
    protected $allowed = [
        'created_at',
    ];
}
