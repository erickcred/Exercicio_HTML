const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourceMap = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");
const pathBase = "./source";
const pathDest = "./build";

// Compilando Sass
function proSass() {
    return gulp.src(`${pathBase}/scss/main.scss`)
        .pipe(sourceMap.init())
        .pipe(sass({
           outputStyle: "compressed" 
        }))
        .pipe(sourceMap.write("./maps"))
        .pipe(gulp.dest(`${pathDest}/css`));
}

// Comprime e obfusca Js
function proJs() {
    return gulp.src(`${pathBase}/js/*`)
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest(`${pathDest}/js`));
}

// Comprime Imagem
function proImage() {
    return gulp.src(`${pathBase}/image/*`)
        .pipe(imagemin())
        .pipe(gulp.dest(`${pathDest}/image`));
}

exports.default = () => {
    gulp.watch(`${pathBase}/scss/*.scss`, { ignoreInitial: false }, gulp.series(proSass));
    gulp.watch(`${pathBase}/js/*`, { ignoreInitial: false }, gulp.series(proJs));
    gulp.watch(`${pathBase}/image/*`, { ignoreInitial: false }, gulp.series(proImage));
}
