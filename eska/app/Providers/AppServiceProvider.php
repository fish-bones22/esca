<?php

namespace App\Providers;

use App\View\Components\KeySelector;
use App\View\Components\ScaleSelector;
use App\View\Components\TagSelector;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::component('key-selector', KeySelector::class);
        Blade::component('scale-selector', ScaleSelector::class);
        Blade::component('tag-selector', TagSelector::class);
    }
}
