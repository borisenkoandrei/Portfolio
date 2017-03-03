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

//
// //Flipper
//
// var authButton = document.querySelector('.authorization'),
//     flipper = document.querySelector('.flipper'),
//     html = document.getElementsByTagName('html')[0];
//
//
// html.onclick = function (e) {
//     var className = e.target.className;
//
//     console.log(e.target.className);
//
//     if (className == 'authorization'){
//         flipper.style.transform = 'rotateY(180deg)';
//     } else{
//         flipper.style.transform = '';
//     }
// };

//mouseMove

var  parallax = (function () {
    var userBg = document.querySelector('.portfolio-bg__img'),
        userBgPos = window.getComputedStyle(userBg).top.slice(0, -2),
        user = document.querySelector('.user'),
        userPos = window.getComputedStyle(user).top.slice(0, -2),
        mainBg =document.querySelector('.portfolio-main-bg'),
        mainBgPos = window.getComputedStyle(mainBg).top.slice(0, -2);

    return{
        move: function (block, blockPos, windowScroll, strafeAmount) {
            var strafe = windowScroll * strafeAmount;
            var style = block.style;
            style.top = blockPos - strafe + 'px';
        },
        init: function (wScroll) {
            this.move(mainBg, mainBgPos, wScroll, 0.5);
            this.move(userBg, userBgPos, wScroll, 0.3);
            this.move(user, userPos, wScroll, 0.2);
        }
    }
}());

//Flipper

var authButton = document.querySelector('.authorization'),
    flipper = document.querySelector('.flipper'),
    html = document.getElementsByTagName('html')[0];


window.onscroll = function () {
    var wScroll = window.pageYOffset;
    console.log(wScroll);
    parallax.init(wScroll);
};




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
