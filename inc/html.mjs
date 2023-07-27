import gulp from 'gulp';
import notify from 'gulp-notify';
import gulpIf from 'gulp-if';
import fileInclude from 'gulp-file-include';
import minifyHTML from 'gulp-htmlmin';

const {
  src,
  dest
} = gulp;
const isProd = process.env.NODE_ENV === 'production';

const compileHTML = () => {
  return src( [ './src/*.html' ] )
    .pipe( fileInclude( {
      prefix: '@',
      basepath: '@file'
    } ).on( 'error', notify.onError() ) )
    .pipe( gulpIf( isProd, minifyHTML( {
      collapseWhitespace: true
    } ) ) )
    .pipe( dest( './build/' ) );
};

export default compileHTML;