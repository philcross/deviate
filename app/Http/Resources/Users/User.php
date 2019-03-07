<?php

namespace App\Http\Resources\Users;

use App\Http\Resources\ConvertsToHashids;
use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
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
            'id'     => $this->toHashId($this->resource->id),
            'name'   => [
                'forename' => $this->resource->forename,
                'surname'  => $this->resource->surname,
            ],
            'email'  => $this->resource->email,
            'avatar' => [
                'url' => $this->resource->avatar_url,
            ],
            'status' => !$this->resource->trashed() ? 'active' : 'deactivated',
            'dates'  => [
                'created_at' => $this->resource->created_at->format('Y-m-d\TH:i:s.000\Z'),
                'updated_at' => $this->resource->updated_at->format('Y-m-d\TH:i:s.000\Z'),
            ],
        ];
    }
}
