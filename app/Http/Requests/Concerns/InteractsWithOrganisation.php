<?php

namespace App\Http\Requests\Concerns;

use App\Models\Organisations\Organisation;

trait InteractsWithOrganisation
{
    /**
     * Returns the ID for the authenticated users organisation
     *
     * @return integer
     */
    public function organisationId()
    {
        return $this->user()->organisation_id;
    }

    /**
     * Return the authenticated users organisation
     *
     * @return Organisation
     */
    public function organisation()
    {
        return $this->user()->organisation;
    }
}
