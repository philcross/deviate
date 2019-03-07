<?php

namespace Tests\Unit\Core\Search;

use Tests\TestCase;

/**
 * @group core-search
 * @group unit
 */
class OrdersTest extends TestCase
{
    /** @test */
    public function it_can_apply_the_default_search_order_to_a_model()
    {
        $model = new MockModel;
        $order = new MockOrder;

        $order->apply($model);

        $this->assertEquals([
            ['surname', 'asc'],
            ['forename', 'asc']
        ], $model->orders);
    }

    /** @test */
    public function it_can_apply_a_custom_order_to_a_model()
    {
        $model = new MockModel;
        $order = new MockOrder([
            'forename' => 'asc',
            'surname'  => 'desc',
        ]);

        $order->apply($model);

        $this->assertEquals([
            ['forename', 'asc'],
            ['surname', 'desc'],
        ], $model->orders);
    }

    /** @test */
    public function if_the_field_is_not_allowed_to_be_ordered_it_is_ignored_when_requested()
    {
        $model = new MockModel;
        $order = new MockOrder([
            'password' => 'asc',
        ]);

        $order->apply($model);

        $this->assertEquals([
            ['surname', 'asc'],
            ['forename', 'asc'],
        ], $model->orders);
    }

    /** @test */
    public function the_direction_can_only_be_either_asc_or_desc()
    {
        $model = new MockModel;
        $order = new MockOrder([
            'forename' => 'invalid',
        ]);

        $order->apply($model);

        $this->assertEquals([
            ['forename', 'asc'],
        ], $model->orders);
    }
}
