<?php

namespace App\Http\Controllers;

use App\Http\Requests\SongRequest;
use App\Http\Services\SongService;
use Exception;
use Illuminate\Http\Request;

class SongController extends Controller
{
    private $songService;

    public function __construct(SongService $songService)
    {
        $this->songService = $songService;
    }

    public function get($id) {
        try {
            $song = $this->songService->getSong($id);
            return json_encode($song);
        } catch (\Exception $ex) {
            return json_encode(['error' => $ex->getMessage()]);
        }
    }

    public function getList(Request $request) {
        try {
            if(isset($request->songIds)) {
                $songs = [];
                foreach($request->songIds as $songId) {
                    $songs[] = $this->songService->getSong($songId);
                }
                return json_encode($songs);
            }
        } catch (\Exception $ex) {
            return json_encode(['error' => $ex->getMessage()]);
        }
    }

    public function upsert(SongRequest $request) {
        try {
            $this->songService->saveSong($request);
            return json_encode(['result' => true]);
        } catch (\Exception $ex) {
            return json_encode(['error' => $ex->getMessage()]);
        }
    }
}
