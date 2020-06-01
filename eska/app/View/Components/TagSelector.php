<?php

namespace App\View\Components;

use App\Http\Services\SongTagService;
use Illuminate\View\Component;

class TagSelector extends Component
{
    public $tags;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(SongTagService $service)
    {
        $this->tags = $service->getAll();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.tag-selector');
    }
}
