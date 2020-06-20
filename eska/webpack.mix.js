const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/main.js', 'public/js')
.js('resources/js/songBuilder/songbuilder.js', 'public/js')
.js('resources/js/songViewer/songviewer.js', 'public/js')
.js('resources/js/setBuilder/setbuilder.js', 'public/js')
.sass('resources/sass/common/common.scss', 'public/css')
.sass('resources/sass/songBuilder/songbuilder.scss', 'public/css')
.sass('resources/sass/setBuilder/setbuilder.scss', 'public/css');
