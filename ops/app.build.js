({
    // All options:
    // https://github.com/jrburke/r.js/blob/master/build/example.build.js
    
    // Copies all contents of appDir into "dir"
    appDir: "../src",

    // Path from which all modules are loaded relative to
    baseUrl: ".",

    // Output path for the build
    dir: "../build",

    // Defines load order dependencies
    shim: {
        'lib/underscore': {
            deps: ['lib/jquery'],
            exports: '_'
        },
        'lib/backbone': {
            deps: ['lib/jquery', 'lib/underscore'],
            exports: 'Backbone'
        }
    },

    paths: {
        //'cdnjquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min'

        lib: 'js/lib',
        templates: 'templates',
        views: 'js/views'
    },

    // Set to none in dev, uglify/closure in rel
    optimize: 'none',

    modules: [
        {
            name: "js/app"
        }
    ]
})