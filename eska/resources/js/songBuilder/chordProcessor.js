window.ChordProcessor = {

    musicReference: window.musicReference || {},

    processChord: function(value, key, scale, modulation = 0) {

        if (typeof value == 'string' && typeof scale == 'string' && typeof key == 'string') {

            let musicReference = ChordProcessor.musicReference;

            let rootKey = key;
            let rootScale = scale;
            let parts = value.split('/');
            let measure = parts[0];
            let root = parts[1];
            let variation = parts[2];
            let variation2 = parts[3];
            let bass = parts[4];

            if (measure == '' || root == '' || variation == '') return '';

            // Get measure
            let measureDisplay = musicReference.measures.find(o => o.name == measure).displayName;

            // IF custom
            if (root == 'custom') {
                return [measureDisplay, variation].join('');
            }

            //** Get root and bass note **//

            // Get scale
            let scaleReference = musicReference.scale.find(o => o.name == rootScale);
            // Get position of root note
            let keyNoteIndex = musicReference.notes.indexOf(musicReference.notes.find(note => note.name == rootKey)) + modulation;
            let rootNoteIndex = (scaleReference.pattern.find(o => o.name == root).noteIndex + keyNoteIndex) % musicReference.notes.length
            let noteRef = musicReference.notes[rootNoteIndex];
            let rootDisplay = noteRef.displayName;

            let bassDisplay = '';
            if (bass != '') {
                let bassNoteIndex = (scaleReference.pattern.find(o => o.name == bass).noteIndex + keyNoteIndex) % musicReference.notes.length
                let bassNoteRef = musicReference.notes[bassNoteIndex];
                bassDisplay = "<sub>/"+bassNoteRef.displayName+'</sub>';
            }

            //** Get Variations */
            let variationDisplay = variation != '' ? musicReference.variations.find(o => o.name == variation).html : '';
            let variation2Display = variation2 != '' ? musicReference.variations.find(o => o.name == variation2).html : '';

            return [measureDisplay, rootDisplay, variationDisplay, variation2Display, bassDisplay].join('');

        }
    }
}
