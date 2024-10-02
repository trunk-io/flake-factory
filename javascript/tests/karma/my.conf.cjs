// Karma configuration
// Generated on Mon Sep 30 2024 11:45:38 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['mocha','browserify'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: './karma-mocha-tests.cjs', included: true }
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      './karma-mocha-tests.cjs': [ 'browserify' ]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress','junit'],

    junitReporter:{
      outputDir: 'test-output',
      outputFile:'karma-output.xml',
      suite:'my-test-suite',
      useBrowserName:false,
      // function (browser, result) to customize the name attribute in xml testcase element
      nameFormatter: function(browser, result) { return "cool-name"},
      // function (browser, result) to customize the classname attribute in xml testcase element
      // classNameFormatter: undefined,
      classNameFormatter: function(browser,result) { return "cool-class-name" }
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity
  })
}
