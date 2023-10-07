const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// Tarefa para compilar SASS
gulp.task('sass', function () {
  return gulp.src('src/styles.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream()); // Atualiza automaticamente o navegador quando o estilo é compilado
});

// Tarefa para otimizar imagens
gulp.task('imagemin', function () {
    return gulp.src('src/images/*.{jpg,png}') 
      .pipe(plumber())
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
      .pipe(browserSync.stream()); // Atualiza automaticamente o navegador quando as imagens são otimizadas
  });
  
//atualizando
// Tarefa para copiar o JavaScript de origem para o destino
gulp.task('copy-js', function () {
  return gulp.src('src/scripts.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream()); // Atualiza automaticamente o navegador quando o JavaScript é copiado
});

// Tarefa para comprimir JavaScript

gulp.task('uglify', function () {
    return gulp.src('src/*.js')  // Alterado para incluir todos os arquivos JS em src
      .pipe(plumber())
      .pipe(concat('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream());
  });

// Tarefa padrão que executa todas as tarefas acima e inicia o servidor de desenvolvimento
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify', 'copy-js'));

// Tarefa de observação para assistir a mudanças nos arquivos e executar automaticamente as tarefas
gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('src/styles.scss', gulp.series('sass'));
  gulp.watch('src/images/*.jpg', gulp.series('imagemin'));
  gulp.watch('src/scripts.js', gulp.series('uglify', 'copy-js'));
});
