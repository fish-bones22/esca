<select id="{{ $attributes['id'] }}" class="{{ $attributes['class'] }}">
    @foreach ($keyReferences as $keyRef)
    <option
    value="{{ $keyRef['root'] }}"
    data-alternative-root="{{ $keyRef['alternative']['root'] }}"
    data-alternative-display="{{ $keyRef['alternative']['display'] }}">{!! $keyRef['display'] !!}</option>
    @endforeach
</select>
