<?php

namespace App\Models\Users;

use App\Models\ConvertsIdsToHashes;
use Carbon\Carbon;
use App\Models\Media\Image;
use App\Scopes\OrganisationScope;
use App\Models\Usergroups\Usergroup;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Builder;
use App\Models\Organisations\Organisation;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @property-read integer $id
 * @property-read Carbon $created_at
 * @property-read Carbon $updated_at
 * @property-read string $avatar_url
 * @property-read string $hash_id
 *
 * @property integer $organisation_id
 * @property string $forename
 * @property string $surname
 * @property string $email
 * @property string $password
 * @property string $remember_token
 *
 * @property-read Image $avatar
 * @property-read Collection $usergroups
 * @property-read Organisation $organisation
 */
class User extends Authenticatable
{
    use Notifiable,
        SoftDeletes,
        ConvertsIdsToHashes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'organisation_id', 'forename', 'surname', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
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
     * Relationship: Returns the organisation this user belongs to
     *
     * @return BelongsTo
     */
    public function organisation()
    {
        return $this->belongsTo(Organisation::class);
    }

    /**
     * Relationship: Returns the avatar that belongs to this user, or a default model if one doesnt exist
     *
     * @return MorphOne
     */
    public function avatar()
    {
        return $this->morphOne(Image::class, 'imageable')->withDefault([
            'filename' => 'default.jpg'
        ]);
    }

    /**
     * Relationship: Usergroups that this user belongs to
     *
     * @return BelongsToMany
     */
    public function usergroups()
    {
        return $this->belongstoMany(Usergroup::class);
    }

    /**
     * Scope: Find all users within a given organisation
     *
     * @param Builder $query
     * @param Organisation $organisation
     *
     * @return Builder
     */
    public function scopeInOrganisation(Builder $query, Organisation $organisation)
    {
        return $query->where('organisation_id', $organisation->id);
    }

    /**
     * Scope: Find a user based on their forename and surname
     *
     * @param Builder $query
     * @param string $forename
     * @param string $surname
     *
     * @return Builder
     */
    public function scopeSearchByNames(Builder $query, string $forename, string $surname)
    {
        return $query->where(function ($query) use ($forename, $surname) {
            return $query->where('forename', 'LIKE', '%'.$forename.'%')
                ->where('surname', 'LIKE', '%'.$surname.'%');
        })->orWhere(function ($query) use ($forename, $surname) {
            return $query->where('forename', 'LIKE', '%'.$surname.'%')
                ->where('surname', 'LIKE', '%'.$forename.'%');
        });
    }

    /**
     * Scope: Fnd a user based on a single name
     *
     * @param Builder $query
     * @param string $name
     *
     * @return Builder
     */
    public function scopeSearchByName(Builder $query, string $name)
    {
        return $query->where('forename', 'LIKE', '%'.$name.'%')
            ->orWhere('surname', 'LIKE', '%'.$name.'%');
    }

    /**
     * Scope: Find a user(s) based on a search term
     *
     * @param Builder $query
     * @param string $term
     *
     * @return Builder
     */
    public function scopeSearchByTerm(Builder $query, string $term)
    {
        if (empty($term)) {
            return $query;
        }

        return $query->where(function ($query) use ($term) {

            if (stripos($term, ' ') !== false) {
                list($forename, $surname) = explode(' ', $term, 2);

                $query->searchByNames($forename, $surname);
            } else {
                $query->searchByName($term);
            }

            $query->orWhere(function ($query) use ($term) {
                $query->searchByEmail($term);
            });
        });
    }

    /**
     * Scope: Find a user(s) based on an email address
     *
     * @param Builder $query
     * @param string $email
     *
     * @return Builder
     */
    public function scopeSearchByEmail(Builder $query, string $email)
    {
        return $query->where('email', 'LIKE', '%'.$email.'%');
    }

    /**
     * Getter: Return the users avatar URL
     *
     * @return string
     */
    public function getAvatarUrlAttribute()
    {
        return '/users/'.$this->id.'/avatar';
    }
}
