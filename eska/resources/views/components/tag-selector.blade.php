<div class="{{ $attributes['classselector']}}">
    @foreach ($tags as $tag)
        <span class="tag-item" data-value="{{ $tag['id'] }}">{{ $tag['name'] }}</span>
    @endforeach
</div>
<input type="hidden" class="{{ $attributes['classinput'] }}" id="{{ $attributes['id'] }}" />
