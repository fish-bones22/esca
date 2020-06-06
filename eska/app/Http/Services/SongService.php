<?php

namespace App\Http\Services;

use App\Http\Requests\SongRequest;
use App\Models\Sequence;
use App\Models\Song;
use App\Models\SongDetail;
use App\Models\SongPart;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;

class SongService {

    private $sequenceService;

    public function __construct(SequenceService $sequenceService)
    {
        $this->sequenceService = $sequenceService;
    }

    public function getSong($id, $defaultSequenceOnly = true) {

        $song = Song::find($id);

        $request = new SongRequest;

        $request->id = $id;
        $request->title = $song->title;
        $request->key = $song->key;
        $request->scale = $song->scale;

        // Get song details
        $request->details = [];
        foreach ($song->details as $detail) {
            $request->details[$detail->key] = $detail->value;
        }

        // Get song parts
        $request->songParts = [];
        foreach ($song->songParts as $songPart) {
            $sequences = [];
            $ids = [];
            foreach ($songPart->sequence as $sequence) {
                if (in_array($sequence->id, $ids)) continue;
                $sequences[] = [
                    'id' => $sequence->id,
                    'name' => $sequence->name
                ];
                $ids[] = $sequence->id;
            }
            $request->songParts[] = [
                'id' => $songPart->id,
                'name' => $songPart->name,
                'referenceKey' => $songPart->reference_key,
                'scale' => $songPart->scale,
                'order' => $songPart->order,
                'lyrics' => [
                    'content' => $songPart->lyrics,
                    'display' => $songPart->lyrics_display
                ],
                'chords' => [
                    'content' => $songPart->chords,
                ],
                'sequences' => $sequences
            ];
        }

        // Get song tags
        $request->tags = [];
        foreach ($song->tags as $tag) {
            $request->tags[] = $tag->id;
        }

        // Get sequence
        $request->sequence = [];
        foreach ($song->sequences as $sequence) {
            // Get sequences
            if ($defaultSequenceOnly && !$sequence->default) {
                $request->sequence[] = ['id' => $sequence->id, 'name' => $sequence->name];
            } else {
                $request->sequence[] = $this->sequenceService->formatToRequest($sequence);
            }
        }

        return $request;

    }

    public function saveSong(SongRequest $request) {

        DB::transaction(function () use ($request) {

            $song = null;

            if (isset($request->id)) {
                $song = Song::find($request->id);
            }

            if ($song == null) {
                $song = new Song();
                $song->id = $request->id;
            }
            // Set song attributes
            $song->title = $request->title;
            $song->key = $request->key;
            $song->scale = $request->scale;


            // Save
            if (!$song->save()) throw new \Exception('Failed to save song '.$song->title);

            // Set song details
            foreach ($request->details as $key => $detail) {
                $mdlDetail = SongDetail::where('key', $key)->where('song_id', $song->id)->first();
                if ($mdlDetail == null) {
                    $mdlDetail = new SongDetail;
                    $mdlDetail->key = $key;
                    $mdlDetail->song_id = $song->id;
                }
                if ($mdlDetail->value != $detail) {
                    $mdlDetail->value = $detail;
                }
                if (!$mdlDetail->save()) throw new \Exception('Failed to save song details '.$key);
            }

            // Set song parts
            $songPartsProcess = [];
            foreach ($request->songParts as $songPart) {
                $mdlSongPart = SongPart::find($songPart['id']);
                if ($mdlSongPart == null) {
                    $mdlSongPart = new SongPart();
                    $mdlSongPart->id = $songPart['id'];
                    $mdlSongPart->song_id = $song->id;
                }
                if ($mdlSongPart->name != $songPart['name']) {
                    $mdlSongPart->name = $songPart['name'];
                }
                if ($mdlSongPart->order != $songPart['order']) {
                    $mdlSongPart->order = $songPart['order'];
                }
                if ($mdlSongPart->reference_key != $songPart['referenceKey']) {
                    $mdlSongPart->reference_key = $songPart['referenceKey'];
                }
                if ($mdlSongPart->scale != $songPart['scale']) {
                    $mdlSongPart->scale = $songPart['scale'];
                }
                if ($mdlSongPart->lyrics != $songPart['lyrics']['content']) {
                    $mdlSongPart->lyrics = $songPart['lyrics']['content'];
                }
                if ($mdlSongPart->lyrics_display != $songPart['lyrics']['display']) {
                    $mdlSongPart->lyrics_display = $songPart['lyrics']['display'];
                }
                if ($mdlSongPart->chords != $songPart['chords']['content']) {
                    $mdlSongPart->chords = $songPart['chords']['content'];
                }
                if (!$mdlSongPart->save()) throw new \Exception('Failed to save song part '.$songPart['name']);
                $songPartsProcess[] = $mdlSongPart->id;
            }
            // Delete un-updated rows
            SongPart::where('song_id', $song->id)
            ->whereNotIn('id', $songPartsProcess)
            ->delete();

            // Set song tags
            $song->tags()->sync($request->tags);

            // Set sequence
            foreach ($request->sequence as $sequence) {

                $mdlSequence = null;

                if ($sequence['id'] != '')
                    $mdlSequence = Sequence::find($sequence['id']);

                if ($mdlSequence == null) {
                    $mdlSequence = new Sequence();
                    $mdlSequence->id = $sequence['id'];
                    $mdlSequence->song_id = $song->id;
                }
                if ($mdlSequence->reference_key != $sequence['referenceKey']) {
                    $mdlSequence->reference_key = $sequence['referenceKey'];
                }
                if ($mdlSequence->description != $sequence['description']) {
                    $mdlSequence->description = $sequence['description'];
                }
                if ($mdlSequence->name != $sequence['name']) {
                    $mdlSequence->name = $sequence['name'];
                }

                // Unset existing default sequences if this sequence is set to default
                if ($sequence['default'] === true) {
                    foreach (Sequence::where('default', true)->where('song_id', $song->id)->get() as $default) {
                        $default->default = false;
                        $default->save();
                    }
                }
                $mdlSequence->default = $sequence['default'] == true;

                if (!$mdlSequence->save()) throw new \Exception('Failed to save sequence '.$sequence['name']);

                $songParts = $sequence['songParts'];
                $ids = [];
                foreach ($songParts as $songPart) {
                    // Get look up value with same sequence_id, songpart_id, order
                    $sequenceLookup = DB::table('sequence_lookup')
                    ->where('songpart_id', $songPart['songPart'])
                    ->where('sequence_id', $mdlSequence->id)
                    ->where('order', $songPart['order'])->first();
                    // Query has value, update
                    if ($sequenceLookup != null) {
                        // Update only if there are difference in values
                        if ($sequenceLookup->repeat != $songPart['repeat']
                        || $sequenceLookup->reference_key != $songPart['referenceKey'])
                            DB::table('sequence_lookup')
                            ->where('songpart_id', $songPart['songPart'])
                            ->where('sequence_id', $mdlSequence->id)
                            ->where('order', $songPart['order'])
                            ->update([
                                'repeat' => $songPart['repeat'],
                                'reference_key' => $songPart['referenceKey'],
                                'updated_at' => Carbon::now()
                            ]);

                        $ids[] = $sequenceLookup->id;
                    }
                    // Insert new
                    else {
                        $now = Carbon::now();
                        $res = DB::table('sequence_lookup')->insert([
                            'repeat' => $songPart['repeat'],
                            'order' => $songPart['order'],
                            'reference_key' => $songPart['referenceKey'],
                            'songpart_id' => $songPart['songPart'],
                            'sequence_id' => $mdlSequence->id,
                            'updated_at' => $now,
                            'created_at' => $now
                            ]);
                        if (!$res) throw new Exception('Error adding lookup value for sequence '.$sequence['name'].' and song part '.$songPart['songPart']);

                        $ids[] = DB::table('sequence_lookup')->orderBy('id', 'desc')->first()->id;
                    }
                }
                // Delete un-updated rows
                DB::table('sequence_lookup')
                ->where('sequence_id', $mdlSequence->id)
                ->whereNotIn('id', $ids)
                ->delete();
            }
        });

    }
}
