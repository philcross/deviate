<?php

namespace App\Models\Usergroups;

use Carbon\Carbon;
use App\Models\ConvertsIdsToHashes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property-read integer $id
 * @property-read Carbon $created_at
 * @property-read Carbon $updated_at
 * @property-read string $hash_id
 *
 * @property string $name
 * @property string $icon
 * @property string $description
 *
 * @property-read Collection $abilities
 */
class AbilityGroup extends Model
{
    use ConvertsIdsToHashes;

    /**
     * Relationship: Return all abilities associated with this group
     *
     * @return HasMany
     */
    public function abilities()
    {
        return $this->hasMany(Ability::class, 'group_id');
    }
}
