<?php

namespace Tests\Unit\Core\Search;

use Tests\TestCase;

/**
 * @group core-search
 * @group unit
 */
class FilterTest extends TestCase
{
    /** @test */
    public function it_can_apply_a_filter()
    {
        $model = new MockModel;
        $filter = new MockFilter([
            'name' => 'Brody',
        ]);

        $filter->apply($model);

        $this->assertEquals([
            'scopeFilterName' => 'Brody',
        ], $model->filters_called);
    }

    /** @test */
    public function it_can_sanitize_the_value_before_passing_to_the_model()
    {
        $model = new MockModel;
        $filter = new MockFilter([
            'name' => 'Brody Cross',
        ]);

        $filter->apply($model);

        $this->assertEquals([
            'scopeFilterName' => 'BrodyCross',
        ], $model->filters_called);
    }

    /** @test */
    public function only_filters_which_are_allowed_can_be_used()
    {
        $model = new MockModel;
        $filter = new MockFilter([
            'invalid_filter' => 'Invalid Value',
        ]);

        $filter->apply($model);

        $this->assertEquals([], $model->filters_called);
    }
}
