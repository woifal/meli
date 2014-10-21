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
				dest: 'dist/'
			}
		},
		copy: {
			prod: {
				expand: true,
				//flatten: true,
				files: [
					{ src: ["js/*", "js/**/*"], dest:"dist/" }
					,{ src: ["js/*"], dest:"dist/" }
					,{ src: ["css/*","css/**/*"],  dest:"dist/" }
					,{ src: ["img/*", "img/**/*"] , dest:"dist/" }
					,{ src: ["lightbox/*", "lightbox/**/*"] , dest:"dist/" }
					,{ src: ["flexslider/*", "flexslider/**/*"] , dest:"dist/" }
				]
			}
		}
    });

    grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-contrib-copy');
    
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('prod', ['includereplace:prod', 'copy:prod']);

};
