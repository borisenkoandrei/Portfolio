/**
 * Created by HTML on 12.02.2017.
 */


module.exports = function() {
    $.gulp.task('sprite:png', function () {
        var spriteData = $.gulp.src('./source/images/sprite/*.png').pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            algorithm: 'binary-tree'
        }));
        return spriteData.pipe($.gulp.dest($.config.root + '/assets/img/sprite_png'));
    });
};