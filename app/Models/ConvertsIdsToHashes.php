<?php

namespace App\Models;

use Hashids\HashidsInterface;
use Illuminate\Database\Eloquent\Builder;

trait ConvertsIdsToHashes
{
    /**
     * Getter: Converts the database integers ID to a hash ID
     *
     * @return string
     */
    public function getHashIdAttribute()
    {
        return app(HashidsInterface::class)->encode($this->id);
    }

    /**
     * Scope: Finds a model based on its hash ID
     *
     * @param Builder $query
     * @param string $hash
     *
     * @return Builder
     */
    public function scopeForHashId(Builder $query, string $hash)
    {
        /** @var HashidsInterface $decoder */
        $decoder = app(HashidsInterface::class);
        $decoded = $decoder->decode($hash)[0];

        return $query->where('id', $decoded);
    }

    /**
     * Scope: Finds multiple model based on an array of hash IDs
     *
     * @param Builder $query
     * @param array $hashes
     *
     * @return Builder
     */
    public function scopeForHashIds(Builder $query, array $hashes)
    {
        /** @var HashidsInterface $decoder */
        $decoder = app(HashidsInterface::class);

        $decoded = array_filter(array_map(function ($hash) use ($decoder) {
            return array_get($decoder->decode($hash), 0);
        }, $hashes));

        return $query->whereIn('id', $decoded);
    }
}
