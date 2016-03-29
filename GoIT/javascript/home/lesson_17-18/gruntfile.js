module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/script.main.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/script.main.js'],
        dest: 'js/script.main.min.js'
      }
    },
    concat_css: {
      all: {
        src: ['css/src/*.css'],
        dest: 'css/main.style.css'
      }
    },
    csso: {
      dist: {
        src: ['css/main.style.css'],
        dest: 'css/main.min.style.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-csso');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'csso']);

};