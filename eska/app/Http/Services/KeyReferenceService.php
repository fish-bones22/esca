<?php

namespace App\Http\Services;

use App\Models\KeyReference;
use Exception;
use Illuminate\Support\Facades\DB;

class KeyReferenceService {

    public function __construct()
    {

    }

    public function getAll() {
        $keyReferences = [];
        $refs = KeyReference::all()->sortBy('order');
        foreach ($refs as $ref) {
            $keyReferences[] = [
                'id' => $ref->id,
                'root' => $ref->root,
                'alternative' => [
                    'root' => $ref->alternative_root,
                    'display'=> $ref->alternative_display
                ],
                'order' => $ref->order,
                'display'=> $ref->display
            ];
        }

        return $keyReferences;
    }
}
