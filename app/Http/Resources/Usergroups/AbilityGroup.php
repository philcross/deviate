<?php

namespace App\Http\Resources\Usergroups;

use App\Http\Resources\ConvertsToHashids;
use Illuminate\Http\Resources\Json\JsonResource;

class AbilityGroup extends JsonResource
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
            'icon'        => $this->resource->icon,
            'description' => $this->resource->description,
            'abilities'   => new AbilityCollection($this->resource->abilities),
            'dates' => [
                'created_at' => $this->resource->created_at->format('Y-m-d\TH:i:s.000\Z'),
                'updated_at' => $this->resource->updated_at->format('Y-m-d\TH:i:s.000\Z'),
            ],
        ];
    }
}
