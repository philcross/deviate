<?php

namespace App\Models\Media;

use App\Scopes\OrganisationScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * @property-read integer $id
 * @property-read string $path
 * @property-read \Carbon\Carbon $created_at
 * @property-read \Carbon\Carbon $updated_at
 *
 * @property string $disk
 * @property string $filename
 * @property integer $imageable_id
 * @property string $imageable_type
 *
 * @property-read Model $imageable
 */
class Image extends Model
{
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
     * Relationship: Return the model this image belongs to
     *
     * @return MorphTo
     */
    public function imageable()
    {
        return $this->morphTo();
    }

    /**
     * Getter: Returns the path to the avatar
     *
     * @return string
     */
    public function getPathAttribute()
    {
        return $this->storage()->path($this->filename);
    }

    /**
     * Delete the avatar record, and the avatar file
     *
     * @return boolean
     *
     * @throws \Throwable
     */
    public function delete()
    {
        if (!$this->exists) {
            return true;
        }

        if ($deleted = parent::delete()) {
            $this->storage()->delete($this->filename);
        }

        return $deleted;
    }

    /**
     * Return the storage mechanism for this object
     *
     * @return Filesystem|FilesystemAdapter
     */
    private function storage()
    {
        return Storage::disk($this->disk);
    }
}
