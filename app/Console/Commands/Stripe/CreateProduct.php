<?php

namespace App\Console\Commands\Stripe;

use Stripe;
use Illuminate\Console\Command;

class CreateProduct extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'stripe:create-product';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new product on stripe';

    /**
     * An array of existing products registered on Stripe
     *
     * @var mixed
     */
    private $existing;

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
        $this->info('** Create a new Stripe Product                               **');
        $this->info('***************************************************************');

        do {
            $name = $this->ask('What is the name of this product?');
        } while(!$this->isValid($name));

        $product = Stripe\Product::create([
            'name'                 => $name,
            'type'                 => 'service',
            'active'               => true,
            'statement_descriptor' => 'Deviate.app',
        ]);

        $this->info('Product created with ID: ' . $product->id);
    }

    private function isValid($name = null)
    {
        if (is_null($name)) {
            return false;
        }

        if (is_null($this->existing)) {
            $this->existing = Stripe\Product::all();
        }

        foreach ($this->existing->data as $product) {
            if ($product->name === $name) {
                $this->error('"' . $name . '" is either invalid or already been taken as a plan name. Please enter a new name.');

                return false;
            }
        }

        return true;
    }
}
