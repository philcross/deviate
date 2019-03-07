<?php

namespace App\Models\Activities;

use App\Models\Media\Image;
use App\Scopes\OrganisationScope;
use App\Models\ConvertsIdsToHashes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property-read integer $id
 * @property-read \Carbon\Carbon $created_at
 * @property-read \Carbon\Carbon $updated_at
 * @property-read string $image_url
 * @property-read string $hash_id
 *
 * @property integer $organisation_id
 * @property integer $collection_id
 * @property string $name
 * @property string $description
 * @property \Carbon\Carbon $starts_at
 * @property \Carbon\Carbon $ends_at
 *
 * @property-read ActivityCollection $collection
 * @property-read Image $image
 */
class Activity extends Model
{
    use ConvertsIdsToHashes;

    /** @var array */
    protected $guarded = [];

    /** @var array */
    protected $dates = [
        'starts_at',
        'ends_at',
        'created_at',
        'updated_at',
    ];

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
     * Relationship: Returns the collection this activity belongs to
     *
     * @return BelongsTo
     */
    public function collection()
    {
        return $this->belongsTo(ActivityCollection::class);
    }

    /**
     * Relationship: Returns the image that belongs to this activity
     *
     * @return MorphOne
     */
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable')->withDefault([
            'filename' => 'default.jpg',
        ]);
    }

    /**
     * Getter: Return the image url for this activity
     *
     * @return string
     */
    public function getImageUrlAttribute()
    {
        return '/activity-collections/'.$this->collection_id.'/activities/'.$this->id.'/image';
    }
}
