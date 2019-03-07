<?php

namespace App\Http\Resources\Activities;

use App\Http\Resources\ConvertsToHashids;
use Illuminate\Http\Resources\Json\JsonResource;

class ActivityGroup extends JsonResource
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
            'id'          => (string)$this->toHashId($this->resource->id),
            'name'        => (string)$this->resource->name,
            'description' => (string)$this->resource->description,
            'image'       => (string)$this->resource->image_url,
            'is_hidden'   => (bool)$this->resource->is_hidden,
            'dates'       => [
                'booking'    => [
                    'opens'  => $this->resource->booking_opens_at->format('Y-m-d\TH:i:s\.000\Z'),
                    'closes' => $this->resource->booking_closes_at->format('Y-m-d\TH:i:s\.000\Z'),
                ],
                'payment'    => [
                    'opens'  => $this->resource->payment_opens_at->format('Y-m-d\TH:i:s\.000\Z'),
                    'closes' => $this->resource->payment_closes_at->format('Y-m-d\TH:i:s\.000\Z'),
                ],
                'activities' => [
                    'start' => $this->resource->activities_start_at->format('Y-m-d\TH:i:s\.000\Z'),
                    'end'   => $this->resource->activities_end_at->format('Y-m-d\TH:i:s\.000\Z'),
                ],
                'created_at' => $this->resource->created_at->format('Y-m-d\TH:i:s.000\Z'),
                'updated_at' => $this->resource->updated_at->format('Y-m-d\TH:i:s.000\Z'),
            ],
        ];
    }
}
