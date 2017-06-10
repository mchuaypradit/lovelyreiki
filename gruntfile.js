module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve: {
        options: {
            port: 9000
        }
    }
  });

  // Load the plugin.
  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).

};