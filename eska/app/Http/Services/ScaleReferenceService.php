<?php

namespace App\Http\Services;
use App\Models\ScaleReference;
use Exception;
use Illuminate\Support\Facades\DB;

class ScaleReferenceService {

    public function __construct()
    {

    }

    public function getAll() {
        $scaleReferences = [];
        $refs = ScaleReference::all()->sortBy('order');
        foreach ($refs as $ref) {
            $scaleReferences[] = [
                'id' => $ref->id,
                'name' => $ref->name,
                'description' => $ref->description,
                'order' => $ref->order,
                'display'=> $ref->display
            ];
        }

        return $scaleReferences;
    }
}
