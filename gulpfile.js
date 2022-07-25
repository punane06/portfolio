// import pkg from "gulp";
// import imagemin from "gulp-imagemin";
// import sass from "gulp-sass";
// import prefix from "gulp-autoprefixer";
// import minify from "gulp-clean-css";
// import terser from "gulp-terser";
// import imagewebp from "gulp-webp";

// list dependences
// const { src, dest, watch, series } = pkg;
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
// const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin");
const imagewebp = require("gulp-webp");
const browserSync = require("browser-sync").create();

// create functions

// scss
function compilescss() {
  return src("src/scss/*.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest("/build/css"))
    .pipe(browserSync.stream());
}

// // js
// function jsmin() {
//   return src("src/js/*.js").pipe(terser().pipe(dest("dist/js")));
// }

// images
function optimizeimg() {
  return src("src/assets/images/*.{jpg,png.svg}")
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optiminzationLevel: 2 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true, cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("build/images"));
}

// webp images
function webpImage() {
  return src("dist/images/*.{jpg,png,svg}")
    .pipe(imagewebp())
    .pipe(dest("dist/images"));
}

// create/watchtask
function watchTask() {
  browserSync.init({ server: { baseDir: "./" } });
  watch("src/scss/*.scss", compilescss);
  watch("./*.tsx").on("change", browserSync.reload);
  // watch("src/js/*.js", jsmin);
  watch("src/assets/images/*.{jpg.png.svg}", optimizeimg);
  watch("src/assets/images/*.{jpg.png.svg}", webpImage);
}

// default gulp
exports.default = series(
  compilescss,
  // jsmin,
  optimizeimg,
  webpImage,
  watchTask
);
