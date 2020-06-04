<?php

namespace App\Http\Services;

use App\Http\Requests\SongpartRequest;
use App\Http\Requests\SongRequest;
use App\Models\Sequence;
use App\Models\songpart;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;

class SongpartService {


    public function getSequences($id) {

        $songpart = songpart::find($id);

        if ($songpart == null) return [];

        $sequences = [];
        $ids = [];
        foreach ($songpart->sequence as $sequence) {
            if (in_array($sequence->id, $ids)) continue;
            $sequences[] = [
                'id' => $sequence->id,
                'name' => $sequence->name
            ];
            $ids[] = $sequence->id;
        }

        return $sequences;

    }
}
