//mouseMove

var  parallaxMove = (function () {
    var userBg = document.querySelector('.portfolio-bg__img'),
        // userBgPos = window.getComputedStyle(userBg).top.slice(0, -2),
        user = document.querySelector('.user'),
        // userPos = window.getComputedStyle(user).top.slice(0, -2),
        mainBg =document.querySelector('.portfolio-main-bg');
        // mainBgPos = window.getComputedStyle(mainBg).top.slice(0, -2);

    return{
        move: function (block, blockPos, windowScroll, strafeAmount) {
            var strafe = windowScroll * strafeAmount;
            var style = block.style;
            style.top = blockPos - strafe + 'px';
        },
        init: function (wScroll) {
            this.move(mainBg, 0, wScroll, 0.5);
            this.move(userBg, 285, wScroll, 0.3);
            this.move(user, 154, wScroll, 0.2);
        }
    }
});

if (document.querySelector('.portfolio-main-bg') !== null){
	window.onscroll = function () {
		var wScroll = window.pageYOffset;
		console.log(wScroll);
		parallaxMove().init(wScroll);
	};
}



