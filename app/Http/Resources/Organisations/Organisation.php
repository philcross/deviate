<?php

namespace App\Http\Resources\Organisations;

use App\Http\Resources\ConvertsToHashids;
use Illuminate\Http\Resources\Json\JsonResource;

class Organisation extends JsonResource
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
            'id'    => $this->toHashId($this->resource->id),
            'name'  => $this->resource->name,
            'slug'  => $this->resource->slug,
            'plan'  => [
                'id' => 'annual',
            ],
            'dates' => [
                'created_at' => $this->resource->created_at->format('Y-m-d\TH:i:s.000\Z'),
                'updated_at' => $this->resource->updated_at->format('Y-m-d\TH:i:s.000\Z'),
            ],
        ];
    }
}
