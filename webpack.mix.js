let mix = require('laravel-mix');
let path = require('path');

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

mix.webpackConfig({
    output: {
        chunkFilename: 'dist/application/chunks/[name].[chunkhash].js',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/frontend'),
            '@applications': path.resolve(__dirname, 'resources/frontend/applications'),
            '@components': path.resolve(__dirname, 'resources/frontend/components'),
            '@modules': path.resolve(__dirname, 'resources/frontend/modules'),
        }
    }
});

mix.js('resources/frontend/applications/application.js', 'public/dist/applications/application.js').version();
