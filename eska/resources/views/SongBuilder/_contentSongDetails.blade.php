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
                <label for="songTags">Tags</label>
                <div class="song-tags-box">
                    <span class="tag-item">Praise</span>
                    <span class="tag-item">Worship</span>
                    <span class="tag-item">English</span>
                    <span class="tag-item">Filipino</span>
                    <span class="tag-item">Thanksgiving</span>
                    <span class="tag-item">Adoration</span>
                    <span class="tag-item">Testimony</span>
                    <span class="tag-item">Repentance</span>
                    <span class="tag-item">Joyful</span>
                    <span class="tag-item">Solemn</span>
                    <span class="tag-item">Upbeat</span>
                    <span class="tag-item">Relaxed</span>
                    <span class="tag-item">Soulful</span>
                    <span class="tag-item">Hymn</span>
                </div>
                <input type="hidden" class="song-tags-input" id="songTags" />
                <span class="error-text" style="display: none;">Select at least one</span>
            </div>
            <div class="song-description input-container">
                <label for="songDescription">Description</label>
                <textarea class="song-description-input" id="songDescription" rows="2" ></textarea>
            </div>
        </div>
        <div class="song-musical-details">
            <div class="song-key input-container">
                <label for="songKey">Key</label>
                <select class="song-key-input" id="songKey">
                    <option>Select key</option>
                    <option value="C" data-scale="Major" selected>Key of C</option>
                    <option value="C#" data-scale="Major">Key of C♯</option>
                    <option value="D" data-scale="Major">Key of D</option>
                    <option value="D#" data-scale="Major">Key of D♯</option>
                    <option value="E" data-scale="Major">Key of E</option>
                    <option value="F" data-scale="Major">Key of F</option>
                    <option value="F#" data-scale="Major">Key of F♯</option>
                    <option value="G" data-scale="Major">Key of G</option>
                    <option value="G#" data-scale="Major">Key of G♯</option>
                    <option value="A" data-scale="Major">Key of A</option>
                    <option value="A#" data-scale="Major">Key of A♯</option>
                    <option value="B" data-scale="Major">Key of B</option>
                </select>
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
