<?php

namespace App\Jobs\Payments;

use App\Models\Users\User;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class CreateCustomer implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /** @var User */
    private $user;

    /** @var integer */
    private $balance;

    /**
     * Create a new job instance.
     *
     * @param User $user
     * @param integer $balance
     *
     * @return void
     */
    public function __construct(User $user, int $balance = 0)
    {
        $this->user    = $user;
        $this->balance = $balance;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->user->organisation->createAsStripeCustomer([
            'email'           => $this->user->email,
            'account_balance' => $this->balance,
            'metadata'        => [
                'deviate_id' => $this->user->organisation_id,
            ],
        ]);
    }
}
