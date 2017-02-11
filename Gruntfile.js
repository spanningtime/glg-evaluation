module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3000,
          protocol: 'http',
          hostname: '0.0.0.0',
          base: 'src',
          directory: null,
          open: false,
          keepalive: true,
          livereload: true
        }
      }
    },
    livereload: {
      options: { livereload: true },
      files: ['src/css/all.css']
    },
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'src/assets/css/all.css': 'src/assets/sass/main.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['src/assets/sass/*.scss'],
        tasks: ['sass']
      },
      javascript: {
        files: ['src/app/main.js']
      },
      html: {
        files: ['src/index.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['connect']);
  grunt.registerTask('go', ['sass', 'watch']);
}
