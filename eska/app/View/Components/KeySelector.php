<?php

namespace App\View\Components;

use App\Http\Services\KeyReferenceService;
use App\Models\KeyReference;
use Illuminate\View\Component;

class KeySelector extends Component
{
    public $keyReferences;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(KeyReferenceService $service)
    {
        $this->keyReferences = $service->getAll();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.key-selector');
    }
}
