<?php

namespace App\Http\Resources;

use Hashids\HashidsInterface;

trait ConvertsToHashids
{
    /**
     * Convert a numeric ID to a Hash ID
     *
     * @param integer $id
     *
     * @return string
     */
    public function toHashId($id)
    {
        return app(HashidsInterface::class)->encode($id);
    }
}
