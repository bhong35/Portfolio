module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dist: {
          options: {
            sourcemap: false,
            compress: false,
            yuicompress: false,
            style: 'expanded',
          },
          files: {
            '../css/style.css' : '../scss/style.scss',
          }
        },
      },
      // cssmin: {
      //   css: {
      //       src: '../css/landing-pages.css',
      //       dest: '../css/landing-pages.min.css'
      //   }
      // },
      // uglify: {
      //   build: {
      //     options: {
      //       mangle: false
      //     },
      //     files: {
      //       '../js/application.js': [ '../src/js/*.js' ]
      //     }
      //   }
      // },
      watch: {
        css: {
          files: ['../scss/*.scss'],
          tasks: ['sass']
          //tasks: ['sass', 'cssmin', 'uglify']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
  }
