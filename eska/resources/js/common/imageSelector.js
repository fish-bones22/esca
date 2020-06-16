(function($) {


    var defaults = {
        'selection': [],
        'fileSelect': '.input-file-select',
        'fileSelectButton': '.btn-file-chooser',
        'fileNameInput': '.input-file-name',
        'filePathInput': '.input-file-path',
        'uploadButton': '.btn-file-uploader',
        'imageSelectButton': '.btn-image-select',
        'imageSelectionsContainer': '.image-selections-content',
        'contextMenu': '.image-selector-context-menu',
        'category': '',
        'multiple': false,
        'shifted': false,
        'select': function(event, target, images) {}
    };

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('imageSelector-options');

        if (options == undefined || !options.hasOwnProperty(key)) return null;

        return options[key];
    }

    /**
     * Set option value
     * @param {Object} object
     * @param {String} key
     * @param {String} value
     */
    function setOption(object, key, value) {
        var options = $(object).data('imageSelector-options');

        options[key] = value;

        $(object).data('imageSelector-options', options);
    }

    /**
     * Click image item event handler
     * @param {Event} event
     */
    function clickImage(event) {
        var obj = event.data.object;

        var imageItem = $(event.target);

        var selection = getOption(obj, 'selection');

        if (!Array.isArray(selection)) selection = [];

        if (!imageItem.hasClass('image-item')) {
            imageItem = imageItem.closest('.image-item');
        }

        var imagePath = imageItem.attr('data-path');
        if (imagePath == undefined) return;

        if (imageItem.hasClass('selected')) {
            imageItem.removeClass('selected');
            selection.splice(selection.indexOf(imagePath), 1);
        } else {

            // Unselect all if multiple flag is unset
            if (!getOption(obj, 'multiple') && !getOption(obj, 'shifted')) {
                $(obj).find('.image-item.selected').removeClass('selected');
                selection = [];
            }

            imageItem.addClass('selected');
            selection.push(imagePath);
        }

        if (selection.length > 0) {
            $(obj).find(getOption(obj, 'imageSelectButton')).removeAttr('disabled');
        } else {
            $(obj).find(getOption(obj, 'imageSelectButton')).attr('disabled', '');
        }

        setOption(obj, 'selection', selection);
    }

    /**
     * Upload the image selected by the file input and insert to it to the image selection list when successful
     * @param {object} obj
     */
    function uploadImage(obj) {
        var form = $(obj).find('form')[0];
        var data = new FormData(form);
        $(getOption(obj, 'loadingScreen')).loadingScreen('show');
        $.ajaxSetup({
            'headers': {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            'url': '/image',
            'method': 'post',
            'contentType': false,
            'data': data,
            'dataType': 'json',
            'processData': false,
        }).done(function(response){
            insertImageItem(obj, response, true, true);
        }).fail(function(response) {
            console.error(response);
        }).always(function() {
            $(getOption(obj, 'loadingScreen')).loadingScreen('hide');
        });
    }

    /**
     * Get images from server
     * @param {object} obj
     */
    function getImages(obj) {
        $.ajaxSetup({
            'headers': {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            'url': '/images',
            'method': 'post',
            'contentType': 'application/json',
            'dataType': 'json',
            'data': JSON.stringify({ 'category': getOption(obj, 'category') }),
        }).done(function(response){
            if (!Array.isArray(response)) {
                return;
            }
            response.forEach(o => {
                insertImageItem(obj, o);
            });
        }).fail(function(response) {
            console.error(response);
        });
    }

    /**
     * Insert image item on the image selection list
     * @param {object} obj
     * @param {object} imageItem Image object
     * @param {boolean} select Select on insert
     * @param {boolean} emptyFileSelector Empty the upload image input after insert
     */
    function insertImageItem(obj, imageItem, select = false, emptyFileSelector = false) {
        // Create image item elements
        var imageItemDiv = $('<div>').addClass('image-item').attr('data-path', imageItem.path).attr('data-category', imageItem.category).attr('data-id', imageItem.id);
        var imageThumbnailDiv = $('<div>').addClass('image-thumbnail');
        var imageDiv = $('<div>').addClass('image').css('background-image', 'url(\'' + imageItem.path + '\')');
        var imageDetails = $('<div>').addClass('image-description');
        var imageNameDiv = $('<div>').addClass('image-name').html(imageItem.filename);

        imageItemDiv.append(
            imageThumbnailDiv.append(imageDiv)
            ).append(
                imageDetails.append(imageNameDiv)
        );

        // Get image selection lit element
        var imageSelections = getOption(obj, 'imageSelectionsContainer');
        // Bind event listeners
        imageItemDiv.bind('click', { 'object': obj }, clickImage);
        imageItemDiv.bind('contextmenu', function(event) {
            event.preventDefault();
            $(getOption(obj, 'contextMenu')).contextMenu('show', imageItemDiv);
        });
        // Add the image item to the image selection list
        $(imageSelections).append(imageItemDiv);
        // Select the image item
        if (select) {
            imageItemDiv.trigger('click');
        }
        // Empty the file input
        if (emptyFileSelector) {
            $(obj).find(getOption(obj, 'fileSelect')).val('').trigger('change');
            $(obj).find(getOption(obj, 'fileNameInput')).val('');
        }
    }

    function show(obj, target) {
        $(obj).addClass('shown');
        console.log(getOption(obj, 'selection'));
        setOption(obj, 'target', target);
    }

    function hide(obj, target) {
        $(obj).removeClass('shown');
    }


    $.fn.imageSelector = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);
                $(self).data('imageSelector-options', settings);

                $(self).find(settings.fileSelectButton).on('click', function() {
                    $(self).find(settings.fileSelect).trigger('click');
                });


                $(self).find('.close').on('click', function() {
                    hide(self);
                });


                $(self).find(settings.fileSelect).on('change', function(event) {
                    var file = event.target.files[0];
                    if (event.target.files.length <= 0 || file == undefined) {
                        $(self).find(settings.filePathInput).val('no file selected');
                        $(self).find(settings.uploadButton).attr('disabled', '');
                        return;
                    }
                    $(self).find(settings.filePathInput).val(file.name);
                    $(self).find(settings.uploadButton).removeAttr('disabled');
                });

                $(self).find(settings.uploadButton).on('click', function() {
                    var fileNameInput = $(self).find(settings.fileNameInput);
                    if (fileNameInput.val() != '')  {
                        uploadImage(self);
                        return;
                    }
                    fileNameInput.closest('.image-uploader').addClass('haserror');
                    fileNameInput.on('keyup', function(event) {
                        if ($(this).val() != '') {
                            fileNameInput.closest('.image-uploader').removeClass('haserror');
                            fileNameInput.off('keyup');
                        }
                    });
                });

                $(document).on('keydown', function(event) {
                    if (event.which == 16) {
                        setOption(self, 'shifted', true);
                    }
                }).on('keyup', function(event) {
                    if (event.which == 16) {
                        setOption(self, 'shifted', false);
                    }
                });

                // Context menu
                $(settings.contextMenu).contextMenu({
                    'followCursor': true,
                    'menuItems': [
                        {
                            'name': 'delete',
                            'selector': '.delete',
                            'action': function(event, menu, target) {
                                $(settings.loadingScreen).loadingScreen('show');
                                var id = $(target).attr('data-id');
                                if (id == undefined) return;
                                $.ajax({
                                    'url': '/image/' + id,
                                    'method': 'delete',
                                    'dataType': 'json',
                                }).done(function(response){
                                    if (response.result) {
                                        $(target).remove();
                                    }
                                }).fail(function(response) {
                                    console.error(response);
                                }).always(function() {
                                    $(settings.loadingScreen).loadingScreen('hide');
                                });
                                $(menu).contextMenu('hide');
                            }
                        }
                    ]
                });

                $(self).on('imageSelector:select', settings.select);

                $(self).find(settings.imageSelectButton).on('click', function() {
                    var selection = getOption(self, 'selection');
                    if (!getOption(self, 'multiple')) selection = selection.splice(selection.length - 1);
                    setOption(self, 'selection', selection);
                    $(self).trigger('imageSelector:select', [ getOption(self, 'target'),  selection]);
                });

                getImages(self);

            });
        }

        if (typeof command == 'string') {
            switch(command.toLowerCase()) {
                case 'show':
                    return $(this).each(function() {
                        show(this, option);
                    });
                case 'hide':
                    return $(this).each(function() {
                        hide(this);
                    });
            }
        }
    }

})(jQuery)
