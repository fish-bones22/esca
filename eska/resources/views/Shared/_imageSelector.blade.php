<div class="image-selector">
    <button class="btn-action close"><span class="material-icons">clear</span></button>
    <div class="content">
        <div class="header">Select or upload an image</div>
        <div class="body">
            <div class="image-selections">
                <div class="label"><label>Select image</label></div>
                <div class="image-selections-content"></div>
                <button type="button" class="btn-primary btn-image-select" disabled=''>Select</button>
            </div>
            <div class="image-uploader">
                <form enctype="multipart/form-data">
                    <div class="label"><label>Upload an image</label></div>
                    <div class="file-selection">
                        <input type="file" class="input-file-select" name="imagefile" accept="image/*" />
                        <input type="text" class="input-file-path" value="no file selected" readonly='' />
                        <button type="button" class="btn-secondary btn-file-chooser">Select File</button>
                    </div>
                    <div class="file-details">
                        <input type="hidden" name="category" value="Background Images" />
                        <input type="text" class="input-file-name" name="filename" placeholder="Image name"/>
                        <i class="error">Do not leave blank</i>
                        <button type="button" class="btn-primary btn-file-uploader" disabled=''>Upload</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="image-selector-context-menu context-menu" style="display: none">
    <ul>
        <li class="delete">Delete</li>
    </ul>
</div>
