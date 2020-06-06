<?php

namespace App\View\Components;

use App\Http\Services\KeyReferenceService;
use App\Http\Services\ScaleReferenceService;
use App\Models\KeyReference;
use Illuminate\View\Component;

class ScaleSelector extends Component
{
    public $scaleReferences;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(ScaleReferenceService $scaleReferences)
    {
        $this->scaleReferences = $scaleReferences->getAll();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.scale-selector');
    }
}
