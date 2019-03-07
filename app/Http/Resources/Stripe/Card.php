<?php

namespace App\Http\Resources\Stripe;

use Illuminate\Http\Resources\Json\JsonResource;

class Card extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'        => $this->resource->id,
            'brand'     => $this->resource->brand,
            'exp_month' => $this->resource->exp_month,
            'exp_year'  => $this->resource->exp_year,
            'last_4'    => $this->resource->last4,
            'type'      => $this->resource->funding,
        ];
    }
}
