<?php

namespace App\Core\Search;

class Search
{
    /** @var AbstractFilter */
    private $filters;

    /** @var AbstractOrder */
    private $orders;

    /**
     * Constructor
     *
     * @param AbstractFilter $filters
     * @param AbstractOrder $orders
     */
    public function __construct(AbstractFilter $filters, AbstractOrder $orders)
    {
        $this->filters = $filters;
        $this->orders = $orders;
    }

    /**
     * Apply the filters and orders to a query
     *
     * @param mixed $model
     *
     * @return void
     */
    public function apply($model)
    {
        if ($this->filters) {
            $this->filters->apply($model);
        }

        if ($this->orders) {
            $this->orders->apply($model);
        }
    }
}
