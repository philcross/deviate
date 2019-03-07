<?php

namespace App\Http\Middleware;

use App\Models\Users\User;
use Closure;
use Illuminate\Support\Facades\Auth;

class Development
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (config('app.env', 'production') === 'local') {
            Auth::login(User::whereEmail('phil@deviate.test')->first());
        }

        return $next($request);
    }
}
