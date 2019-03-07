<?php

namespace App\Models\Organisations;

use App\Models\ConvertsIdsToHashes;
use App\Models\Users\User;
use Laravel\Cashier\Billable;
use App\Scopes\OrganisationScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @property-read integer $id
 * @property-read \Carbon\Carbon $created_at
 * @property-read \Carbon\Carbon $updated_at
 * @property-read string $hash_id
 *
 * @property string $name
 * @property string $slug
 *
 * @property-read Collection $superusers
 * @property-read Collection $users
 */
class Organisation extends Model
{
    use Billable,
        ConvertsIdsToHashes;

    /** @var array */
    protected $guarded = [];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new OrganisationScope);
    }

    /**
     * Relationship: Returns all the superusers for this organisation
     *
     * @return BelongsToMany
     */
    public function superusers()
    {
        return $this->belongsToMany(User::class, 'super_users');
    }

    /**
     * Relationship: Returns all the users of this organisation
     *
     * @return HasMany
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
