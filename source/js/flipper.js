//Flipper


var flipper = function() {
	var flipperCard = document.querySelector('.flipper');


	return{
			start: function(){
				flipperCard.style.transform = 'rotateY(180deg)';
				}
		}
};


if (document.querySelector('.authorization') !== null){
	var authorization = document.querySelector('.authorization');
	// var flipper1 = flipper;
	authorization.onclick = function () {
		flipper().start();
		authorization.style.display='none';

	}
};






