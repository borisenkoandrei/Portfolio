// //blur
//
var blur = function () {
    var wrapper = document.querySelector('.speak'),
        form = document.querySelector('.feedback__bg');

    return{
        set: function () {
            var imgWid = document.querySelector('.speak').offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop,
                blurCSS = form.style;
                console.log(imgWid);

            blurCSS.backgroundSize = imgWid + 'px' + ' ' + 'auto';
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';

        }
    }
};


if (document.querySelector('.speak') !== null){
	window.onresize = function () {
		blur().set()
	}
};
