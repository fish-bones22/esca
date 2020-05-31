<?php

namespace App\Http\Controllers;

use App\Http\Requests\SongRequest;
use App\Http\Services\SongService;
use Illuminate\Http\Request;

class SongController extends Controller
{
    private $songService;

    public function __construct(SongService $songService)
    {
        $this->songService = $songService;
    }

    public function get($id) {
        $song = $this->songService->getSong($id);
        return json_encode($song);
    }

    public function upsert(SongRequest $request) {
        $this->songService->saveSong($request);
        return "OKAY";
    }
}
