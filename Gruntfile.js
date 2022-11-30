const path = require("path");

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-gitbook');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-http-server');
  
  grunt.initConfig({
    'gitbook': {
      development: {
        input: "./",
        title: "leevan's Tech Notes",
        description: "",
        github: "baboleevan/tech-notes"
      }
    },
    'gh-pages': {
      options: {
        base: '_book'
      },
      src: ['**']
    },
    'clean': {
      files: '_book'
    },
    'http-server': {
      'dev': {
        // the server root directory
        root: 'docs',
        port: 4000,
        host: "127.0.0.1",
        showDir: true,
        autoIndex: true,
        defaultExt: "html",
        //wait or not for the process to finish
        runInBackground: false
      }
    }
  });
  
  grunt.registerTask('test', [
    'gitbook',
    'http-server'
  ]);
  grunt.registerTask('publish', [
    'gitbook',
    'gh-pages',
    'clean'
  ]);
  grunt.registerTask('default', 'gitbook');
};
