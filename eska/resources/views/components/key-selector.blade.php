<select id="{{ $attributes['id'] }}" class="{{ $attributes['class'] }}">
    @foreach ($keyReferences as $keyRef)
    <option
    value="{{ $keyRef['root'] }}"
    data-scale="{{ $keyRef['scale'] }}"
    data-alternative-root="{{ $keyRef['alternative']['root'] }}"
    data-alternative-display="{{ $keyRef['alternative']['display'] }}">{!! $keyRef['display'] !!}</option>
    {{ $attributes }}
    @endforeach
</select>
