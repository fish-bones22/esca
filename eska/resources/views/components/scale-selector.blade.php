<select id="{{ $attributes['id'] }}" class="{{ $attributes['class'] }}">
    @foreach ($scaleReferences as $scaleRef)
    <option value="{{ $scaleRef['name'] }}">{!! $scaleRef['display'] !!}</option>
    @endforeach
</select>
