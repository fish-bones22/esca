<?php

namespace App\Http\Services;

use App\Models\KeyReference;
use App\Models\SongTag;
use Exception;
use Illuminate\Support\Facades\DB;

class SongTagService {

    public function getAll() {
        $songTags = [];
        $tags = SongTag::all();
        foreach ($tags as $tag) {
            $songTags[] = [
                'id' => $tag->id,
                'name' => $tag->name,
                'description' => $tag->description
            ];
        }

        return $songTags;
    }
}
