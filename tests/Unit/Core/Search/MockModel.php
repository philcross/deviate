<?php

namespace Tests\Unit\Core\Search;

use Illuminate\Database\Eloquent\Model;

class MockModel extends Model
{
    public $orders = [];
    public $filters_called = [];

    public function orderBy($field, $direction)
    {
        $this->orders[] = [$field, $direction];
    }

    public function scopeFilterName($query, $name)
    {
        $this->filters_called[__FUNCTION__] = $name;
    }
}
