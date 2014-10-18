module.exports = function(grunt) {
grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		includereplace: {
			prod: {
				options: {
					flatten: true
                    ,globals: {
                        NOWW: new Date()
                    }
				// Task-specific options go here.
				},
				// Files to perform replacements and includes with
				src: ['*.html', "*.xml"],
				// Destination directory to copy files to
				dest: '../live/'
			}
		},
		copy: {
			prod: {
				expand: true,
				//flatten: true,
				files: [
					{ src: ["js/*", "js/**/*"], dest:"../live/" }
					,{ src: ["js/*"], dest:"../live/" }
					,{ src: ["css/*","css/**/*"],  dest:"../live/" }
					,{ src: ["img/*", "img/**/*"] , dest:"../live/" }
					,{ src: ["lightbox/*", "lightbox/**/*"] , dest:"../live/" }
					,{ src: ["flexslider/*", "flexslider/**/*"] , dest:"../live/" }
				]
			}
		}
    });

    grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-contrib-copy');
    
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('prod', ['includereplace:prod', 'copy:prod']);

};
