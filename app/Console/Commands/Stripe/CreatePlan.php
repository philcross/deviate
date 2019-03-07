<?php

namespace App\Console\Commands\Stripe;

use Stripe;
use Illuminate\Console\Command;

class CreatePlan extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'stripe:create-plan';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new plan on stripe';

    /**
     * An array of products that have been created
     *
     * @return array
     */
    private $products;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        Stripe\Stripe::setApiKey(config('services.stripe.secret', ''));
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('***************************************************************');
        $this->info('** Create a new Stripe Plan                                  **');
        $this->info('***************************************************************');

        $product  = $this->choice('Which product is this plan for?', $this->getProducts());
        $price    = $this->ask('How much is this plan? (In pence)');
        $interval = $this->choice('How often should this plan be charged to the customer?', [
            'day', 'week', 'month', 'year'
        ]);

        $plan = Stripe\Plan::create([
            'currency' => 'gbp',
            'interval' => $interval,
            'product'  => $this->productIdFromName($product),
            'amount'   => $price,
        ]);

        $this->info('Plan created with ID: '.$plan->id);
    }

    private function getProducts()
    {
        if (is_null($this->products)) {
            $products = Stripe\Product::all();

            $this->products = $products->data;
        }

        return array_map(function ($product) {
            return $product->name;
        }, $this->products);
    }

    private function productIdFromName($name)
    {
        foreach ($this->products as $product) {
            if ($product->name === $name) {
                return $product->id;
            }
        }
    }
}
