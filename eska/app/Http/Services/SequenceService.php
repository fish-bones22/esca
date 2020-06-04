<?php

namespace App\Http\Services;

use App\Http\Requests\SequenceRequest;
use App\Models\Sequence;
use App\Models\Song;
use App\Models\SongDetail;
use App\Models\SongPart;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;

class SequenceService {

    public function __construct()
    {

    }

    public function getSequence($id) {

        $sequence = Sequence::find($id);
        return $this->formatToRequest($sequence);

    }

    public function formatToRequest($sequence) {
        $request = new SequenceRequest;
        // Get sequence song parts
        $sequenceSongParts = [];
        foreach ($sequence->songParts as $songPart) {
            $sequenceSongParts[] = [
                'songPart' => $songPart->id,
                'name' => $songPart->name,
                'order' => $songPart->pivot->order,
                'referenceKey' => $songPart->pivot->reference_key,
                'repeat' => $songPart->pivot->repeat
            ];
        }
        $request = [
            'id' => $sequence->id,
            'referenceKey' => $sequence->reference_key,
            'description' => $sequence->description,
            'default' => $sequence->default == 1,
            'name' => $sequence->name,
            'songParts' => $sequenceSongParts
        ];
        return $request;
    }
}
