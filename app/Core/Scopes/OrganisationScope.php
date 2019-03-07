<?php

namespace App\Scopes;

use App\Models\Organisations\Organisation;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class OrganisationScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
        if ($organisationId = (optional(app('auth')->guard()->user())->organisation_id)) {
            if ($model instanceof Organisation) {
                $builder->where('id', $organisationId);
            } else {
                $builder->where('organisation_id', $organisationId);
            }
        }
    }
}
