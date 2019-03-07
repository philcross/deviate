<?php

namespace App\Core\Search;

use Illuminate\Support\Str;
use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model;

abstract class AbstractFilter
{
    /** @var array */
    protected $filters = [];

    /** @var array  */
    protected $map = [];

    /**
     * Constructor
     *
     * @param array $filters
     */
    public function __construct(array $filters = [])
    {
        foreach ($filters as $filter => $value) {
            $this->add($filter, $value);
        }
    }

    /**
     * Add a new filter
     *
     * @param string $filter
     * @param string $value
     *
     * @return static
     */
    public function add($filter, $value)
    {
        if ($this->isAllowed($filter)) {
            $this->filters[$filter] = $value;
        }

        return $this;
    }

    /**
     * Apply the filters on a model
     *
     * @param Model|Builder $model
     */
    public function apply($model)
    {
        foreach ($this->filters() as $name => $value) {
            $method = $this->map()[$name];

            $model->{$method}($this->sanitize($name, $value));
        }
    }

    /**
     * Return an array of filters to use and their values
     *
     * @return array
     */
    protected function filters(): array
    {
        return $this->filters;
    }

    /**
     * Return a map of user allowed filters, and the scope name on the model
     *
     * @return array
     */
    protected function map(): array
    {
        return $this->map;
    }

    /**
     * Attempt to sanitize the value
     *
     * @param string $name
     * @param mixed $value
     *
     * @return mixed
     */
    private function sanitize($name, $value)
    {
        $sanitizer = Str::camel('sanitize' . $name);

        if (method_exists($this, $sanitizer)) {
            $value = call_user_func_array([$this, $sanitizer], [$value]);
        }

        return $value;
    }

    /**
     * Check to see if a filter is allowed
     *
     * @param $filter
     *
     * @return bool
     */
    private function isAllowed($filter)
    {
        return array_key_exists($filter, $this->map());
    }
}
