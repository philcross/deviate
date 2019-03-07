<?php

namespace App\Providers;

use Hashids\Hashids;
use Hashids\HashidsInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(HashidsInterface::class, function () {
            return new Hashids(config('app.key'), 6);
        });
    }
}
