// Parallax
var parallax = function () {
	var paralaxContainer = document.querySelector('.parallax'),
		layers = paralaxContainer.children;

	return{
	    start: function(){
			window.addEventListener('mousemove', function (e) {

			var pageX = e.pageX,
				pageY = e.pageY,
				initialX = (window.innerWidth / 2) - pageX,
				initialY = (window.innerHeight / 2) - pageY;

                [].slice.call(layers).forEach(function (layer, i) {
                    var layerStyle = layer.style,
                        divider = i / 40,
                        bottomPosition = (window.innerHeight / 2) * divider,
                        horizontalPosition = (window.innerWidth / 2) * divider,
                        positionX = initialX * divider,
                        positionY = initialY * divider,
                        transformString = 'translate3d(' + positionX + 'px,' + positionY + 'px, 0)';

                    layerStyle.transform = transformString;
                    layerStyle.webkitTransform = transformString;
                    layerStyle.bottom = '-' + bottomPosition + 'px';
                    layerStyle.left = '-' + horizontalPosition + 'px';
                    layerStyle.right = '-' + horizontalPosition + 'px';
                })

		    })
        }
    }
};

if (document.querySelector('.parallax') !== null){
	parallax().start();
};
