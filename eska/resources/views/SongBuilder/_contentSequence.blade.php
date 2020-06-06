<div class="sequence-container" style="display: none;">
    <div class="sequence-details">
        <div class="other-sequence-actions">
            <button class="btn-link new-sequence">New sequence</button>
            <button class="btn-link select-other-sequence">Edit other sequence</button>
        </div>
        <div class="sequence-title">Sequence Details</div>
        <div class="edit-details">
            <div class="input-container">
                <label for="sequenceName">Name</label>
                <input type="text" id="sequenceName" />
            </div>
            <div class="input-container">
                <label for="sequenceDescription">Description</label>
                <textarea id="sequenceDescription"></textarea>
            </div>
            <div class="input-container">
                <label for="sequenceDefault" class="check-label"><input type="checkbox" id="sequenceDefault" /> Make the default sequence</label>
            </div>
        </div>
        <input type="hidden" id="sequenceId" />
    </div>
    <div class="sequence-title">Drag or insert song parts to expected position</div>
    <div id="sequenceBox"></div>
    <div class="action-box sequence-actions">
        <button class="btn-link add-sequence" data-target="#sequenceBox" >Add song part</button>
    </div>
</div>
