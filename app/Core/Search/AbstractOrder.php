<?php

namespace App\Core\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

abstract class AbstractOrder
{
    /** @var array */
    protected $defaults = [
        'created_at' => 'desc',
    ];

    /** @var array */
    protected $allowed = [];

    /** @var array */
    protected $custom = [];

    /**
     * Constructor
     *
     * @param array $order
     */
    public function __construct(array $order = [])
    {
        foreach ($order as $field => $direction) {
            $this->add($field, $direction);
        }
    }

    /**
     * Add a new custom order
     *
     * @param string $field
     * @param string $direction
     *
     * @return static
     */
    public function add($field, $direction)
    {
        if ($this->isAllowed($field)) {
            $this->custom[$field] = $this->normalizeDirection($direction);
        }

        return $this;
    }

    /**
     * Apply the order to a model
     *
     * @param Model|Builder $model
     */
    public function apply($model)
    {
        foreach ($this->getOrder() as $field => $direction) {
            $model->orderBy($field, $direction);
        }
    }

    /**
     * Return the default fields and directions to order by
     *
     * @return array
     */
    protected function defaults(): array
    {
        return $this->defaults;
    }

    /**
     * Check to see if a field is allowed to be ordered
     *
     * @param string $field
     *
     * @return bool
     */
    protected function isAllowed($field)
    {
        return in_array($field, $this->allowed);
    }

    /**
     * Make sure the direction provided is valid, or default to ascending order if not
     *
     * @param string $direction
     *
     * @return string
     */
    private function normalizeDirection($direction)
    {
        return in_array($direction, ['asc', 'desc']) ? $direction : 'asc';
    }

    /**
     * Return the order to use for this search
     *
     * @return array
     */
    private function getOrder()
    {
        return empty($this->custom) ? $this->defaults() : $this->custom;
    }
}
