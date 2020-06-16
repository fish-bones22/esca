<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImageRequest;
use App\Http\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    private $imageService;

    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }

    public function getAll(Request $request) {

        $category = '';
        if ($request->has('category')) {
            $category = $request->category;
        }

        return json_encode($this->imageService->getAll($category));
    }

    public function save(ImageRequest $request) {
        // Validate
        if (!$request->hasFile('imagefile')) return json_encode(['error' => 'No file selected']);
        if (!$request->file('imagefile')->isValid()) return json_encode(['error' => 'Problem uploading the file selected']);

        $path = $request->imagefile->store('public/img/uploads');
        // Remove public from the path created
        $path = str_replace('public/', 'storage/', $path);
        $request->path = $path;
        // Save the image
        $this->imageService->save($request);

        return json_encode([
            'path' => $path,
            'filename' => $request->filename,
            'category' => $request->category,
            'id' => $request->id
        ]);
    }

    public function delete($id) {

        $path = $this->imageService->getPath($id);
        $path = str_replace('storage/', 'public/', $path);
        Storage::delete($path);
        $this->imageService->delete($id);

        return json_encode(['result' => true]);
    }
}
