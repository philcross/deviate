<?php

namespace App\Core\Search;

trait RequestTrait
{
    /**
     * Create a new search object
     *
     * @return Search
     */
    public function search()
    {
        return new Search(
            $this->searchFilters(),
            $this->searchOrders()
        );
    }

    /**
     * Return the maximum number of records to return
     *
     * @param integer $default
     *
     * @return integer
     */
    public function limit(int $default = 20): int
    {
       return $this->get('limit', $default);
    }

    /**
     * Create a new filters object
     *
     * @return AbstractFilter
     */
    public function searchFilters()
    {
        $class = NullFilter::class;

        if (isset($this->search_filters)) {
            $class = $this->search_filters;
        }

        if (defined('static::SEARCH_FILTER')) {
            $class = static::SEARCH_FILTER;
        }

        return new $class($this->get('filters', []));
    }

    /**
     * Create a new orders object
     *
     * @return AbstractOrder
     */
    public function searchOrders()
    {
        $class = NullOrder::class;

        if (isset($this->search_orders)) {
            $class = $this->search_orders;
        }

        if (defined('static::SEARCH_ORDER')) {
            $class = static::SEARCH_ORDER;
        }

        return new $class($this->get('orders', []));
    }
}
