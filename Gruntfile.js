module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["build/"],
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src', 
            src: ['css/*', 'fonts/*', 'img/*', 'js/vendor/*', 'js/rubberduck.min.js', '!jsx/', 'favicon.ico', 'index.html'], 
            dest: 'build/'
          }
        ]
      }
    },
    react: {
      single_file_output: {
        files: {
          'web/js/songlist.js': 'src/jsx/FilterableSongList.jsx'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'src/js/rubberduck.min.js': ['src/js/rubberduck.js']
        }
      }
    },
    watch: {
      react: {
        files: 'src/jsx/FilterableSongList.jsx',
        tasks: ['react']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');

  // Custom tasks for Grunt
  grunt.registerTask('prepdeploy', ['clean', 'react', 'uglify', 'copy']);
};
