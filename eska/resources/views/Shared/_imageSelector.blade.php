<div class="image-selector">
    <button class="btn-action close"><span class="material-icons">clear</span></button>
    <div class="content">
        <div class="header">Select or upload an image</div>
        <div class="body">
            <div class="image-selections">
                <div class="label"><label>Select image</label></div>
                <div class="image-selections-content">
                    <div class="image-item" data-path='TEST 1'>
                        <div class="image-thumbnail"><div class="image" style="background-image: url('{{ asset('storage/img/songviewer/view_audience.png') }}'"></div></div>
                        <div class="image-description">
                            <div class="image-name"></div>
                        </div>
                    </div>
                    <div class="image-item" data-path='TEST 2'>
                        <div class="image-thumbnail"><div class="image" style="background-image: url('{{ asset('storage/img/songviewer/view_performance.png') }}'"></div></div>
                        <div class="image-description">
                            <div class="image-name"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="image-uploader">
                <div class="label"><label>Upload an image</label></div>
                <div class="file-selection">
                    <input type="file" class="input-file-select" />
                    <input type="text" class="input-file-path" value="no file selected" readonly='' />
                    <button type="button" class="btn-secondary btn-file-chooser">Select File</button>
                </div>
                <div class="file-details">
                    <input type="text" class="input-file-name" placeholder="Image name"/>
                    <i class="error">Do not leave blank</i>
                    <button type="button" class="btn-primary btn-file-uploader" disabled=''>Upload</button>
                </div>
            </div>
        </div>
    </div>
</div>
