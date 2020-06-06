<div class="sequence-item-template" style="display: none;">
    <div class="sequence-item">
        <select></select>
        <div class="repeat">
            <label>Repeat: </label>
            <form class="repeat-input" onsubmit="return false">
                <input type="number" min="1" />
                <button type="reset" class="btn-action clear"><span class="material-icons">clear</span></button>
            </form>
        </div>
        <div class="modulation">
            <label>Modulate: </label>
            <form class="modulation-input" onsubmit="return false">
                <input type="number" />
                <button type="reset" class="btn-action clear"><span class="material-icons">clear</span></button>
            </form>
        </div>
        <div class="sequence-item-actions">
            <button class="option-sequence btn-action" tabindex="-1"><span class="material-icons">more_vert</span></button>
            <button class="move-handle btn-action" tabindex="-1"><span class="material-icons" tabindex="-1">drag_handle</span></button>
        </div>
    </div>
</div>
