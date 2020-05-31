<?php

namespace App\Http\Requests;

use App\Models\Sequence;
use App\Models\Song;
use App\Models\SongDetail;
use App\Models\SongPart;
use App\Models\SongTag;
use Illuminate\Foundation\Http\FormRequest;
use Ramsey\Uuid\Uuid;

class SongRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
