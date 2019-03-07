<?php

namespace App\Http\Resources\Activities;

use App\Http\Resources\ConvertsToHashids;
use Illuminate\Http\Resources\Json\JsonResource;

class Activity extends JsonResource
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
            'id'            => (string)$this->toHashId($this->resource->id),
            'collection_id' => (string)$this->toHashId($this->resource->collection_id),
            'name'          => (string)$this->resource->name,
            'description'   => (string)$this->resource->description,
            'price'         => [
                'raw'       => (int)$this->resource->price,
                'formatted' => sprintf('£%s', number_format($this->resource->price / 100, 2)),
            ],
            'places'        => (int)$this->resource->places,
            'image'         => (string)$this->resource->image_url,
            'dates'         => [
                'starts_at'  => $this->resource->starts_at->format('Y-m-d\TH:i:s.000\Z'),
                'ends_at'    => $this->resource->ends_at->format('Y-m-d\TH:i:s.000\Z'),
                'created_at' => $this->resource->created_at->format('Y-m-d\TH:i:s.000\Z'),
                'updated_at' => $this->resource->updated_at->format('Y-m-d\TH:i:s.000\Z'),
            ],
        ];
    }
}
