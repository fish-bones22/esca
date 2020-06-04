<?php

namespace App\Http\Controllers;

use App\Http\Services\SongpartService;
use Exception;

class SongpartController extends Controller
{
    private $songpartService;

    public function __construct(SongpartService $songpartService)
    {
        $this->songpartService = $songpartService;
    }

    public function getSequences($id) {
        $sequences = $this->songpartService->getSequences($id);
        return json_encode($sequences);
    }
}
