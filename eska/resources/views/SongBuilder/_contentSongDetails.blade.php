<div class="song-details-container">
    <div class="body">
        <div class="song-basic-details">
            <div class="song-title input-container">
                <label for="songTitle">Title</label>
                <input type="text" class="song-title-input" id="songTitle" />
                <span class="error-text" style="display: none;">Do not leave empty</span>
            </div>
            <div class="song-artist input-container">
                <label for="songArtist">Artist</label>
                <input type="text" class="song-artist-input" id="songArtist" />
                <span class="error-text" style="display: none;">Do not leave empty. Write 'anonymous' if unknown</span>
            </div>
            <div class="song-tags input-container">
                <label for="songtags">Tags</label>
                <x-tag-selector classselector="song-tags-box" classinput="song-tags-input" id="songtags" />
                <span class="error-text" style="display: none;">Select at least one</span>
            </div>
            <div class="song-description input-container">
                <label for="songDescription">Description</label>
                <textarea class="song-description-input" id="songDescription" rows="2" ></textarea>
            </div>
        </div>
        <div class="song-musical-details">
            <div class="song-key input-container">
                <label for="songkey">Key</label>
                <x-key-selector class="song-key-input" id="songkey" />
                <span class="error-text" style="display: none;">Select one</span>
            </div>
            <div class="song-time-sign input-container">
                <label for="songTimeSign">Time Signature</label>
                <select class="song-time-sign-input" id="songTimeSign">
                    <option value="4/4"><sup>4</sup>/<sub>4</sub></option>
                    <option value="6/8"><sup>6</sup>/<sub>8</sub></option>
                    <option value="3/4"><sup>3</sup>/<sub>4</sub></option>
                    <option value="2/4"><sup>2</sup>/<sub>4</sub></option>
                </select>
            </div>
            <div class="song-speed input-container">
                <label for="songSpeed">Tempo (BPM)</label>
                <input type="number" min="50" value="120" class="song-speed-input" id="songSpeed">
            </div>
        </div>
    </div>
    <div class="actions-container"></div>
</div>
