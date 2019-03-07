<?php

namespace App\Models\Usergroups;

use App\Models\ConvertsIdsToHashes;
use Illuminate\Database\Eloquent\Model;

/**
 * @property-read integer $id
 * @property-read \Carbon\Carbon $created_at
 * @property-read \Carbon\Carbon $updated_at
 * @property-read string $hash_id
 *
 * @property integer $group_id
 * @property string $name
 * @property string $ability_key
 * @property string $description
 *
 */
class Ability extends Model
{
    use ConvertsIdsToHashes;

    /** @var array */
    protected $guarded = [];
}
