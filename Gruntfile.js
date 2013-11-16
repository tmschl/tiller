module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['public/sass/partials/**.scss', 'public/sass/modules/**.scss'],
        tasks: 'sass:dev'
      }
    },

    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/css/main.css': 'public/sass/main.scss'
        }
      },
      dev: {
        options: {
          style: 'expanded'
        },
        src: ['public/sass/main.scss'],
        dest: 'public/css/main.css'
      }
    },

  });

  // Load the installed tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['watch']);

};
