<?php

namespace App\Http\Resources\Usergroups\Search;

use App\Http\Resources\ConvertsToHashids;
use App\Http\Resources\Users\UserCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class Usergroup extends JsonResource
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
            'description' => $this->resource->description,
            'members'     => new UserCollection($this->resource->members),
            'dates'       => [
                'created_at' => $this->resource->created_at->format('Y-m-d\TH:i:s.000\Z'),
                'updated_at' => $this->resource->updated_at->format('Y-m-d\TH:i:s.000\Z'),
            ],
        ];
    }
}
