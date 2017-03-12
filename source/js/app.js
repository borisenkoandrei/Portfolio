var slider = (function () {

	var _moveUP = function () {
		var items = $(".prev").children(".btmItem"),
			activeItem = items.filter(".active"),
			nextItem = activeItem.next();

		if (nextItem.length ==0){
			items.first().addClass("active");
			items.last().removeClass("active");
			items.last().addClass("up");
			setTimeout(function () {
				items.last().removeClass("up");
			}, 1000)
		} else {
			nextItem.addClass("active");
			activeItem.removeClass("active");
			activeItem.addClass("up");
			setTimeout(function () {
				activeItem.last().removeClass("up");
			}, 1000)
		}

	};

	var _moveDown =function () {
		var items = $(".next").children(".btmItem"),
			activeItem = items.filter(".active"),
			nextItem = activeItem.next();

		if (nextItem.length ==0){
			items.first().addClass("active");
			items.last().removeClass("active");
			items.last().addClass("down");
			setTimeout(function () {
				items.last().removeClass("down");
			}, 1000)
		} else {
			nextItem.addClass("active");
			activeItem.removeClass("active");
			activeItem.addClass("down");
			setTimeout(function () {
				activeItem.last().removeClass("down");
			}, 1000)
		}



	};

	var sldePrev = function () {
		var items = $(".main__pic").children(".main__img"),
			activeItem = items.filter(".main__img__active"),
			prevItem = activeItem.prev();

		if (prevItem.length == 0){
			items.last().addClass("main__img__active");
			items.prev().removeClass("main__img__active");
		} else{
			prevItem.addClass("main__img__active");
			activeItem.removeClass("main__img__active");
		}

	};

	var sldeNext = function () {
		var items = $(".main__pic").children(".main__img"),
			activeItem = items.filter(".main__img__active"),
			nextItem = activeItem.next();

		if (nextItem.length == 0){
			items.first().addClass("main__img__active");
			items.last().removeClass("main__img__active");
		} else{
			nextItem.addClass("main__img__active");
			activeItem.removeClass("main__img__active");
		}

	};

	var sliderDescNext = function () {
		var items = $(".works-ex__left-content").children(".works-ex__left-content-wrapper"),
			activeItem = items.filter(".works-ex__left-content-wrapper-active"),
			nextItem = activeItem.next();

		if (nextItem.length == 0){
			items.first().addClass("works-ex__left-content-wrapper-active");
			items.last().removeClass("works-ex__left-content-wrapper-active");
		} else{
			nextItem.addClass("works-ex__left-content-wrapper-active");
			activeItem.removeClass("works-ex__left-content-wrapper-active");
		}
	};

	var sliderDescPrew = function () {
		var items = $(".works-ex__left-content").children(".works-ex__left-content-wrapper"),
			activeItem = items.filter(".works-ex__left-content-wrapper-active"),
			prevItem = activeItem.prev();

		if (prevItem.length == 0){
			items.last().addClass("works-ex__left-content-wrapper-active");
			items.prev().removeClass("works-ex__left-content-wrapper-active");
		} else{
			prevItem.addClass("works-ex__left-content-wrapper-active");
			activeItem.removeClass("works-ex__left-content-wrapper-active");
		}

	};

	return {
		init: function () {
			$('.prev').on("click", function (e) {
				e.preventDefault();
				_moveUP();
				_moveDown();
				sldePrev();
				sliderDescPrew();
			});

			$('.next').on("click", function (e) {
				e.preventDefault();
				_moveDown();
				_moveUP();
				sldeNext();
				sliderDescNext();
			});
		}
	}
})();

if ($('.prev') !== null) {
	slider.init();
}



var validate = (function () {

	var form = document.querySelector(".feedback_form");
	var name = document.querySelector(".feedback_form__name");
	var errName = document.querySelector(".feedback_form__error-name")
	var email = document.querySelector(".feedback_form__name");
	var comment = document.querySelector(".feedback_form__message");
	var errComment = document.querySelector(".feedback_form__error-message");
	var submit = document.querySelector(".feedback_form__send");
	var data = $('.feedback_form').serialize();


	var NameValidate = function () {
		if (name.value == ""){
			errName.style.display = "block";
			return false;
		} else {
			errName.style.display = "none";
			return true;
		}

	};

	var commentValidate = function () {
		if (comment.value == ""){
			errComment.style.display = "block";
			return false;
		} else {
			errComment.style.display = "none";
			return true;
		}

	};


	return{
		init:function () {
			form.addEventListener('submit', function (e) {
				NameValidate();
				commentValidate();
				e.preventDefault();

				if (NameValidate() & commentValidate()){
					alert("Submite - OK");

					$.ajax({
						type: 'POST',
						url: 'assets/res.php',
						data: data,
						success: function(data) {
							$('.feedback_form__message').html(data);
						},
						error:  function(xhr, str){
							alert('Возникла ошибка: ' + xhr.responseCode);
						}
					});

					return true;
				} else{
					e.preventDefault();
					return false;
				}

			})
		}
	}
})();


if ($('.feedback ') !== null) {
	validate.init();
}




