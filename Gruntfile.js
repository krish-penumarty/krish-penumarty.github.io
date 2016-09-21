module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "imagemagick-resize":{
      dev:{
        from:'UneditedPhotos/',
        to:'images/',
        files:'portland.jpg',
        props:{
          width:1600
        }
      }
    },"imagemagick-hisrc":{
      dev:{
        files:"images/*.jpg",
        suffix:["-2x","-1x","-low"],
      }
    }, "imageoptim": {
        myTask: {
          src: ['images']
        }
      }
  });

  // Load the plugin that provides the "imagemagick" task.
  grunt.loadNpmTasks('grunt-imagemagick');
  grunt.loadNpmTasks('grunt-imageoptim');

  // Default task(s).
  grunt.registerTask('default', ['imagemagick-resize', 'imagemagick-hisrc', 'imageoptim']);

};