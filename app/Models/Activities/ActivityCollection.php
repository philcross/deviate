<?php

namespace App\Models\Activities;

use App\Models\Media\Image;
use App\Scopes\OrganisationScope;
use App\Models\ConvertsIdsToHashes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

/**
 * @property-read integer $id
 * @property-read \Carbon\Carbon $created_at
 * @property-read \Carbon\Carbon $updated_at
 * @property-read string $image_url
 * @property-read string $hash_id
 *
 * @property integer $organisation_id
 * @property string $name
 * @property string $description
 * @property \Carbon\Carbon $booking_opens_at
 * @property \Carbon\Carbon $booking_closes_at
 * @property \Carbon\Carbon $payment_opens_at
 * @property \Carbon\Carbon $payment_closes_at
 * @property \Carbon\Carbon $activities_start_at
 * @property \Carbon\Carbon $activities_end_at
 *
 * @property-read Image $image
 * @property-read Collection $activities
 */
class ActivityCollection extends Model
{
    use ConvertsIdsToHashes;

    /** @var string */
    protected $table = 'activity_collections';

    /** @var array */
    protected $guarded = [];

    /** @var array */
    protected $dates = [
        'booking_opens_at',
        'booking_closes_at',
        'payment_opens_at',
        'payment_closes_at',
        'activities_start_at',
        'activities_end_at',
        'created_at',
        'updated_at',
    ];

    /** @var array */
    protected $with = ['image'];

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
     * Relationship: Returns the image associated with this collection
     *
     * @return MorphOne
     */
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable')->withDefault([
            'disk'     => 'collections',
            'filename' => 'default.jpg',
        ]);
    }

    /**
     * Relationship: Returns all the activities associated with this collection
     *
     * @return HasMany
     */
    public function activities()
    {
        return $this->hasMany(Activity::class, 'collection_id');
    }

    /**
     * Scope: Only show visible groups
     *
     * @param Builder $query
     *
     * @return Builder
     */
    public function scopeVisible(Builder $query)
    {
        return $query->where('is_hidden', false);
    }

    /**
     * Getter: Returns the image url for this collection
     *
     * @return string
     */
    public function getImageUrlAttribute()
    {
        return '/activity-collections/'.$this->id.'/image';
    }
}
