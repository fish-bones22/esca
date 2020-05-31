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

    public function __construct()
    {

    }

    public function getSong($id) {

        $song = Song::find($id);

        $request = new SongRequest;

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
            $request->songParts[] = [
                'id' => $songPart->id,
                'name' => $songPart->name,
                'referenceKey' => $songPart->reference_key,
                'order' => $songPart->order,
                'lyrics' => [
                    'content' => $songPart->lyrics,
                    'display' => $songPart->lyrics_display
                ],
                'chords' => [
                    'content' => $songPart->chords,
                ]
            ];
        }

        // Get song tags
        $request->tags = [];
        foreach ($song->tags as $tag) {
            $request->tags[] = $tag;
        }

        // Get sequence
        $request->sequence = [];
        foreach ($song->sequences as $sequence) {
            // Get sequence song parts
            $sequenceSongParts = [];
            foreach ($sequence->songParts as $songPart) {
                $sequenceSongParts[] = [
                    'songPart' => $songPart->id,
                    'order' => $songPart->pivot->order,
                    'referenceKey' => $songPart->pivot->reference_key,
                    'repeat' => $songPart->pivot->repeat
                ];
            }
            $request->sequence[] = [
                'id' => $sequence->id,
                'referenceKey' => $sequence->reference_key,
                'description' => $sequence->description,
                'default' => $sequence->default,
                'name' => $sequence->name,
                'songParts' => $sequenceSongParts
            ];
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
                $mdlDetail = $song->details->where('key', $key)->first();
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
            foreach ($request->songParts as $songPart) {
                $mdlSongPart = $song->songParts->find($songPart['id']);
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
            }

            // Set song tags
            $song->tags()->sync($request->tags);

            // Set sequence
            foreach ($request->sequences as $sequence) {
                $mdlSequence = $song->sequences->find($sequence['id']);
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
                if ($mdlSequence->default != $sequence['default']) {
                    $mdlSequence->default = $sequence['default'];
                }

                if (!$mdlSequence->save()) throw new \Exception('Failed to save sequence '.$sequence['name']);

                $songParts = $sequence['songParts'];
                $ids = [];
                foreach ($songParts as $songPart) {
                    // Get look up value with same sequence_id, songpart_id, order
                    $sequenceLookup = DB::table('sequence_lookup')
                    ->where('songpart_id', $songPart['songPart'])
                    ->where('sequence_id', $sequence['id'])
                    ->where('order', $songPart['order'])->first();
                    // Query has value, update
                    if ($sequenceLookup != null) {
                        // Update only if there are difference in values
                        if ($sequenceLookup->repeat != $songPart['repeat']
                        || $sequenceLookup->reference_key != $songPart['referenceKey'])
                            DB::table('sequence_lookup')
                            ->where('songpart_id', $songPart['songPart'])
                            ->where('sequence_id', $sequence['id'])
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
                            'sequence_id' => $sequence['id'],
                            'updated_at' => $now,
                            'created_at' => $now
                            ]);
                        if (!$res) throw new Exception('Error adding lookup value for sequence '.$sequence['name'].' and song part '.$songPart['songPart']);

                        $ids[] = DB::table('sequence_lookup')->orderBy('id', 'desc')->first()->id;
                    }
                }
                // Delete un-updated rows
                DB::table('sequence_lookup')
                ->where('sequence_id', $sequence['id'])
                ->whereNotIn('id', $ids)
                ->delete();
            }
        });

    }
}
