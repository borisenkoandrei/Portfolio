//Flipper


var flipper = function() {
	var flipperCard = document.querySelector('.flipper');


	return{
			start: function(){
				flipperCard.style.transform = 'rotateY(180deg)';
				},
			stop: function () {
                flipperCard.style.transform = 'rotateY(0deg)';
            }

		}
};


if (document.querySelector('.authorization') !== null){
	var authorization = document.querySelector('.authorization'),
		back=document.querySelector('.auth_button-back');


	// var flipper1 = flipper;
	authorization.onclick = function () {
		flipper().start();
		authorization.style.display='none';

	};
	back.onclick =function () {
        flipper().stop();
        authorization.style.display='block';
    }


};






