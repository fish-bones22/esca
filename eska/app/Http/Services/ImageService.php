<?php

namespace App\Http\Services;

use App\Models\Image;
use Exception;
use Illuminate\Support\Facades\DB;

class ImageService {

    public function __construct()
    {

    }

    public function save($imageRequest) {

        $image = null;

        if ($imageRequest->id != '') {
            $image = Image::find($imageRequest->id);
        }
        if ($image == null) {
            $image = new Image;
        }

        $image->name = $imageRequest->filename;
        $image->category = $imageRequest->category;
        $image->path = $imageRequest->path;

        $image->save();

    }

    public function getAll($category = '') {
        $images = [];
        if ($category != '') {
            $imagesMdl = Image::where('category', $category)->orderBy('created_at', 'asc')->get();
        } else {
            $imagesMdl = Image::orderBy('created_at', 'asc')->get();
        }
        foreach ($imagesMdl as $image) {
            $images[] = [
                'id' => $image->id,
                'filename' => $image->name,
                'category' => $image->category,
                'path' => $image->path
            ];
        }

        return $images;
    }

    function getPath($id) {
        $image = Image::find($id);
        if ($image == null) return '';

        return $image->path;
    }

    function delete($id) {
        $image = Image::find($id);
        if ($image == null) return '';

        return $image->delete();
    }
}
