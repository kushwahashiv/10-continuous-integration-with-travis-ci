// Karma configuration
// Generated on Sat Dec 24 2016 16:30:46 GMT+0530 (IST)

module.exports = function (config) {
    const testWebpackConfig = require('./webpack.test.js')({env: 'test'});
    const configuration = {

        // base path that will be used to resolve all patterns (e.g. files, exclude)
        basePath: '',

      /* Frameworks to use
       * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
       */
        frameworks: ['mocha', 'chai'],

      /*list of files / patterns to load in the browser
       * we are building the test environment in ./spec-bundle.js
       */
        files: [{pattern: './spec-bundle.js', watched: false}],

        // list of files to exclude
        exclude: [],

      /* preprocess matching files before serving them to the browser
       * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
       */
        preprocessors: {'./spec-bundle.js': ['webpack', 'sourcemap']},

      /* test results reporter to use
       * possible values: 'dots', 'progress'
       * available reporters: https://npmjs.org/browse/keyword/karma-reporter
       */
        reporters: ['mocha', 'progress'],

        // Webpack Config at ./webpack.test.js
        webpack: testWebpackConfig,

        // Webpack please don't spam the console when running in karma!
        webpackMiddleware: {stats: 'errors-only'},

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

      /* level of logging
       * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
       */
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

      /* start these browsers
       * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
       */
        browsers: [
            'Chrome'
        ],

      /* Continuous Integration mode
       * if true, Karma captures browsers, runs the tests and exits
       */
        singleRun: true,

      /* Concurrency level
       * how many browser should be started simultaneous
       */
        concurrency: Infinity
    };

    config.set(configuration);
};
