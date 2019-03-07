<?php

namespace App\Models\Usergroups;

use Carbon\Carbon;
use App\Models\Users\User;
use App\Scopes\OrganisationScope;
use App\Models\ConvertsIdsToHashes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @property-read integer $id
 * @property-read Carbon $created_at
 * @property-read Carbon $updated_at
 * @property-read string $hash_id
 *
 * @property integer $organisation_id
 * @property string $name
 * @property string $description
 *
 * @property-read Collection $members
 * @property-read Collection $abilities
 */
class Usergroup extends Model
{
    use ConvertsIdsToHashes;

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
     * Relationship: Members
     *
     * @return BelongsToMany
     */
    public function members()
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * Relationship: Define all the abilities associated with this usergroup
     *
     * @return BelongsToMany
     */
    public function abilities()
    {
        return $this->belongsToMany(Ability::class);
    }

    /**
     * Scope: Search usergroups based on a term
     *
     * @param Builder $query
     * @param string $term
     *
     * @return Builder
     */
    public function scopeSearch(Builder $query, string $term)
    {
        return $query->where('name', 'LIKE', '%'.$term.'%');
    }
}
