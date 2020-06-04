<?php

namespace App\Http\Controllers;

use App\Http\Services\SequenceService;
use Illuminate\Http\Request;

class SequenceController extends Controller
{
    private $sequenceService;

    public function __construct(SequenceService $sequenceService)
    {
        $this->sequenceService = $sequenceService;
    }

    public function get($id) {
        $sequence = $this->sequenceService->getSequence($id);
        return json_encode($sequence);
    }
}
