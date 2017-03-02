// //Parallax
//
// var paralaxContainer = document.querySelector('.parallax'),
//     layers = paralaxContainer.children;
//
// window.addEventListener('mousemove', function (e) {
//
//     var pageX = e.pageX,
//         pageY = e.pageY,
//         initialX = (window.innerWidth / 2) - pageX,
//         initialY = (window.innerHeight / 2) - pageY;
//
//     [].slice.call(layers).forEach(function (layer, i) {
//         var layerStyle = layer.style,
//             divider = i / 40,
//             bottomPosition = (window.innerHeight / 2) * divider,
//             horizontalPosition = (window.innerWidth / 2) * divider,
//             positionX = initialX * divider,
//             positionY = initialY * divider,
//             transformString = 'translate3d(' + positionX + 'px,' + positionY + 'px, 0)';
//
//         layerStyle.transform = transformString;
//         layerStyle.webkitTransform = transformString;
//         layerStyle.bottom = '-' + bottomPosition + 'px';
//         layerStyle.left = '-' + horizontalPosition + 'px';
//         layerStyle.right = '-' + horizontalPosition + 'px';
//     })
//
// });

//Flipper

var authButton = document.querySelector('.authorization'),
    flipper = document.querySelector('.flipper'),
    html = document.getElementsByTagName('html')[0];


html.onclick = function (e) {
    var className = e.target.className;

    console.log(e.target.className);

    if (className == 'authorization'){
        flipper.style.transform = 'rotateY(180deg)';
     } //else{
    //     flipper.style.transform = '';
    // }
}

//blur

var blur = (function () {
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
}());

blur.set()

window.onresize = function () {
    blur.set()

}