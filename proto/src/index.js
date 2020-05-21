window.$ = window.jQuery = require('jquery');

require('./dynamicPanel');


$(document).ready(function(){
    $('#stanza1').dynamicPanel({
        'key': 'stanza',
        'panelId': 'songLine',
        'panelTemplate': '.content-prototype',
        'removerSelector': '.delete-line',
    });
});