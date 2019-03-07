<?php

namespace App\Http\Resources\Usergroups;

use App\Http\Resources\ConvertsToHashids;
use Illuminate\Http\Resources\Json\JsonResource;

class Ability extends JsonResource
{
    use ConvertsToHashids;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'          => $this->toHashId($this->resource->id),
            'name'        => $this->resource->name,
            'ability_key' => $this->resource->ability_key,
            'description' => $this->resource->description,
        ];
    }
}
