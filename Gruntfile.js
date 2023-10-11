module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['less'], // caminho para os arquivos Less
                },
                files: {
                    'dist/style.css': 'less/estilo.less', // caminho de saída para o CSS compilado
                },
            },
        },

        uglify: {
            my_target: {
                files: {
                    'dist/script.min.js': ['js/script.js'], // caminho de saída para o JS comprimido
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};
