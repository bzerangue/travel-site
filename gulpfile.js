var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("hooray, you created a default task.");
});

gulp.task('html', function(){ 
    console.log("imagine, html task here.");
});

gulp.task('styles', function(){ 
    console.log("imagine, postcss tasks running here.");
});

gulp.task('watch', function(){
    
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });

});