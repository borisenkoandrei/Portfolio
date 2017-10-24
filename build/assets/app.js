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

	var _moveUPPrev = function () {
		var items = $(".prev").children(".btmItem"),
			activeItem = items.filter(".active"),
			nextItem = activeItem.prev();

		if (nextItem.length ==0){
			items.last().addClass("active");
			items.first().removeClass("active");
			items.first().addClass("up");
			setTimeout(function () {
				items.first().removeClass("up");
			}, 1000)
		} else {
			nextItem.addClass("active");
			activeItem.removeClass("active");
			activeItem.addClass("up");
			setTimeout(function () {
				activeItem.first().removeClass("up");
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

	var _moveDownPrev =function () {
		var items = $(".next").children(".btmItem"),
			activeItem = items.filter(".active"),
			nextItem = activeItem.prev();

		if (nextItem.length ==0){
			items.last().addClass("active");
			items.first().removeClass("active");
			items.first().addClass("down");
			setTimeout(function () {
				items.first().removeClass("down");
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
				_moveUPPrev();
				_moveDownPrev();
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

	//authorization
	var login = document.querySelector(".login");
	var loginPic = document.querySelector(".login-pic");
	var pass = document.querySelector(".pass");
	var passPic = document.querySelector(".pass-pic");
	var checkbox = document.querySelector(".checkbox");
	var checkboxFace = document.querySelector(".checkbox_face");
	var checkboxText = document.querySelector(".auth__checkbox-text");
	var radio = document.getElementsByClassName("auth_radio-input-true");
	var radioText = document.getElementsByClassName("auth_radio-input-text")
	var enter = document.querySelector(".enter");

	var loginValidate = function () {
		if (login.value==""){
			login.parentNode.style.border = "1px solid red";
			loginPic.style.fill = "red";
		} else{
			login.parentNode.style.border = "1px solid green";
			loginPic.style.fill = "green";
		}
	};

	var passValidate = function () {
		if (pass.value==""){
			pass.parentNode.style.border = "1px solid red";
			passPic.style.fill = "red";
		} else{
			pass.parentNode.style.border = "1px solid green";
			passPic.style.fill = "green";
		}
	};

	var checkboxValidate = function () {
		if (checkbox.checked == false){
			checkboxFace.style.border = "1px solid red";
			checkboxText.style.color = "red";
		} else{
			checkboxFace.style.border = "1px solid green";
			checkboxText.style.color = "green ";
		}
	};

	var radioValidate = function () {
		var arr = Array.from(radioText);
		for (var i=0; i < radio.length; i++){
			if (radio[i].checked == true && radio[i].value == "yes") {
				console.log("OK");
				arr.forEach(function (item) {
					console.log("1");
					item.style.color = "";
				});
				break
			} else{
				arr.forEach(function (item) {
					console.log("2");
					item.style.color = "red";

				})
			}
		}
	};

	//dsdsd


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
		},
		validate: function () {
			enter.addEventListener("click",function () {
				loginValidate();
				passValidate();
				checkboxValidate();
				radioValidate();
			})
		}
	}
})();


if (document.querySelector(".feedback") !== null) {
	validate.init();
}

if (document.querySelector(".auth_container") !== null){
	validate.validate();
};




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0dmFyIF9tb3ZlVVAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaXRlbXMgPSAkKFwiLnByZXZcIikuY2hpbGRyZW4oXCIuYnRtSXRlbVwiKSxcclxuXHRcdFx0YWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcihcIi5hY3RpdmVcIiksXHJcblx0XHRcdG5leHRJdGVtID0gYWN0aXZlSXRlbS5uZXh0KCk7XHJcblxyXG5cdFx0aWYgKG5leHRJdGVtLmxlbmd0aCA9PTApe1xyXG5cdFx0XHRpdGVtcy5maXJzdCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRpdGVtcy5sYXN0KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHRcdGl0ZW1zLmxhc3QoKS5hZGRDbGFzcyhcInVwXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpdGVtcy5sYXN0KCkucmVtb3ZlQ2xhc3MoXCJ1cFwiKTtcclxuXHRcdFx0fSwgMTAwMClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5leHRJdGVtLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRhY3RpdmVJdGVtLmFkZENsYXNzKFwidXBcIik7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGFjdGl2ZUl0ZW0ubGFzdCgpLnJlbW92ZUNsYXNzKFwidXBcIik7XHJcblx0XHRcdH0sIDEwMDApXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdHZhciBfbW92ZVVQUHJldiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBpdGVtcyA9ICQoXCIucHJldlwiKS5jaGlsZHJlbihcIi5idG1JdGVtXCIpLFxyXG5cdFx0XHRhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKFwiLmFjdGl2ZVwiKSxcclxuXHRcdFx0bmV4dEl0ZW0gPSBhY3RpdmVJdGVtLnByZXYoKTtcclxuXHJcblx0XHRpZiAobmV4dEl0ZW0ubGVuZ3RoID09MCl7XHJcblx0XHRcdGl0ZW1zLmxhc3QoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0aXRlbXMuZmlyc3QoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0aXRlbXMuZmlyc3QoKS5hZGRDbGFzcyhcInVwXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpdGVtcy5maXJzdCgpLnJlbW92ZUNsYXNzKFwidXBcIik7XHJcblx0XHRcdH0sIDEwMDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRuZXh0SXRlbS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0YWN0aXZlSXRlbS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0YWN0aXZlSXRlbS5hZGRDbGFzcyhcInVwXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRhY3RpdmVJdGVtLmZpcnN0KCkucmVtb3ZlQ2xhc3MoXCJ1cFwiKTtcclxuXHRcdFx0fSwgMTAwMClcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0dmFyIF9tb3ZlRG93biA9ZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGl0ZW1zID0gJChcIi5uZXh0XCIpLmNoaWxkcmVuKFwiLmJ0bUl0ZW1cIiksXHJcblx0XHRcdGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoXCIuYWN0aXZlXCIpLFxyXG5cdFx0XHRuZXh0SXRlbSA9IGFjdGl2ZUl0ZW0ubmV4dCgpO1xyXG5cclxuXHRcdGlmIChuZXh0SXRlbS5sZW5ndGggPT0wKXtcclxuXHRcdFx0aXRlbXMuZmlyc3QoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0aXRlbXMubGFzdCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRpdGVtcy5sYXN0KCkuYWRkQ2xhc3MoXCJkb3duXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpdGVtcy5sYXN0KCkucmVtb3ZlQ2xhc3MoXCJkb3duXCIpO1xyXG5cdFx0XHR9LCAxMDAwKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmV4dEl0ZW0uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHRcdGFjdGl2ZUl0ZW0uYWRkQ2xhc3MoXCJkb3duXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRhY3RpdmVJdGVtLmxhc3QoKS5yZW1vdmVDbGFzcyhcImRvd25cIik7XHJcblx0XHRcdH0sIDEwMDApXHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0fTtcclxuXHJcblx0dmFyIF9tb3ZlRG93blByZXYgPWZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBpdGVtcyA9ICQoXCIubmV4dFwiKS5jaGlsZHJlbihcIi5idG1JdGVtXCIpLFxyXG5cdFx0XHRhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKFwiLmFjdGl2ZVwiKSxcclxuXHRcdFx0bmV4dEl0ZW0gPSBhY3RpdmVJdGVtLnByZXYoKTtcclxuXHJcblx0XHRpZiAobmV4dEl0ZW0ubGVuZ3RoID09MCl7XHJcblx0XHRcdGl0ZW1zLmxhc3QoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0aXRlbXMuZmlyc3QoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdFx0aXRlbXMuZmlyc3QoKS5hZGRDbGFzcyhcImRvd25cIik7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGl0ZW1zLmZpcnN0KCkucmVtb3ZlQ2xhc3MoXCJkb3duXCIpO1xyXG5cdFx0XHR9LCAxMDAwKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmV4dEl0ZW0uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHRcdGFjdGl2ZUl0ZW0uYWRkQ2xhc3MoXCJkb3duXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRhY3RpdmVJdGVtLmxhc3QoKS5yZW1vdmVDbGFzcyhcImRvd25cIik7XHJcblx0XHRcdH0sIDEwMDApXHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0fTtcclxuXHJcblxyXG5cdHZhciBzbGRlUHJldiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBpdGVtcyA9ICQoXCIubWFpbl9fcGljXCIpLmNoaWxkcmVuKFwiLm1haW5fX2ltZ1wiKSxcclxuXHRcdFx0YWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcihcIi5tYWluX19pbWdfX2FjdGl2ZVwiKSxcclxuXHRcdFx0cHJldkl0ZW0gPSBhY3RpdmVJdGVtLnByZXYoKTtcclxuXHJcblx0XHRpZiAocHJldkl0ZW0ubGVuZ3RoID09IDApe1xyXG5cdFx0XHRpdGVtcy5sYXN0KCkuYWRkQ2xhc3MoXCJtYWluX19pbWdfX2FjdGl2ZVwiKTtcclxuXHRcdFx0aXRlbXMucHJldigpLnJlbW92ZUNsYXNzKFwibWFpbl9faW1nX19hY3RpdmVcIik7XHJcblx0XHR9IGVsc2V7XHJcblx0XHRcdHByZXZJdGVtLmFkZENsYXNzKFwibWFpbl9faW1nX19hY3RpdmVcIik7XHJcblx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoXCJtYWluX19pbWdfX2FjdGl2ZVwiKTtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0dmFyIHNsZGVOZXh0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGl0ZW1zID0gJChcIi5tYWluX19waWNcIikuY2hpbGRyZW4oXCIubWFpbl9faW1nXCIpLFxyXG5cdFx0XHRhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKFwiLm1haW5fX2ltZ19fYWN0aXZlXCIpLFxyXG5cdFx0XHRuZXh0SXRlbSA9IGFjdGl2ZUl0ZW0ubmV4dCgpO1xyXG5cclxuXHRcdGlmIChuZXh0SXRlbS5sZW5ndGggPT0gMCl7XHJcblx0XHRcdGl0ZW1zLmZpcnN0KCkuYWRkQ2xhc3MoXCJtYWluX19pbWdfX2FjdGl2ZVwiKTtcclxuXHRcdFx0aXRlbXMubGFzdCgpLnJlbW92ZUNsYXNzKFwibWFpbl9faW1nX19hY3RpdmVcIik7XHJcblx0XHR9IGVsc2V7XHJcblx0XHRcdG5leHRJdGVtLmFkZENsYXNzKFwibWFpbl9faW1nX19hY3RpdmVcIik7XHJcblx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoXCJtYWluX19pbWdfX2FjdGl2ZVwiKTtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0dmFyIHNsaWRlckRlc2NOZXh0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGl0ZW1zID0gJChcIi53b3Jrcy1leF9fbGVmdC1jb250ZW50XCIpLmNoaWxkcmVuKFwiLndvcmtzLWV4X19sZWZ0LWNvbnRlbnQtd3JhcHBlclwiKSxcclxuXHRcdFx0YWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcihcIi53b3Jrcy1leF9fbGVmdC1jb250ZW50LXdyYXBwZXItYWN0aXZlXCIpLFxyXG5cdFx0XHRuZXh0SXRlbSA9IGFjdGl2ZUl0ZW0ubmV4dCgpO1xyXG5cclxuXHRcdGlmIChuZXh0SXRlbS5sZW5ndGggPT0gMCl7XHJcblx0XHRcdGl0ZW1zLmZpcnN0KCkuYWRkQ2xhc3MoXCJ3b3Jrcy1leF9fbGVmdC1jb250ZW50LXdyYXBwZXItYWN0aXZlXCIpO1xyXG5cdFx0XHRpdGVtcy5sYXN0KCkucmVtb3ZlQ2xhc3MoXCJ3b3Jrcy1leF9fbGVmdC1jb250ZW50LXdyYXBwZXItYWN0aXZlXCIpO1xyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHRuZXh0SXRlbS5hZGRDbGFzcyhcIndvcmtzLWV4X19sZWZ0LWNvbnRlbnQtd3JhcHBlci1hY3RpdmVcIik7XHJcblx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoXCJ3b3Jrcy1leF9fbGVmdC1jb250ZW50LXdyYXBwZXItYWN0aXZlXCIpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHZhciBzbGlkZXJEZXNjUHJldyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBpdGVtcyA9ICQoXCIud29ya3MtZXhfX2xlZnQtY29udGVudFwiKS5jaGlsZHJlbihcIi53b3Jrcy1leF9fbGVmdC1jb250ZW50LXdyYXBwZXJcIiksXHJcblx0XHRcdGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoXCIud29ya3MtZXhfX2xlZnQtY29udGVudC13cmFwcGVyLWFjdGl2ZVwiKSxcclxuXHRcdFx0cHJldkl0ZW0gPSBhY3RpdmVJdGVtLnByZXYoKTtcclxuXHJcblx0XHRpZiAocHJldkl0ZW0ubGVuZ3RoID09IDApe1xyXG5cdFx0XHRpdGVtcy5sYXN0KCkuYWRkQ2xhc3MoXCJ3b3Jrcy1leF9fbGVmdC1jb250ZW50LXdyYXBwZXItYWN0aXZlXCIpO1xyXG5cdFx0XHRpdGVtcy5wcmV2KCkucmVtb3ZlQ2xhc3MoXCJ3b3Jrcy1leF9fbGVmdC1jb250ZW50LXdyYXBwZXItYWN0aXZlXCIpO1xyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHRwcmV2SXRlbS5hZGRDbGFzcyhcIndvcmtzLWV4X19sZWZ0LWNvbnRlbnQtd3JhcHBlci1hY3RpdmVcIik7XHJcblx0XHRcdGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoXCJ3b3Jrcy1leF9fbGVmdC1jb250ZW50LXdyYXBwZXItYWN0aXZlXCIpO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKCcucHJldicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0X21vdmVVUFByZXYoKTtcclxuXHRcdFx0XHRfbW92ZURvd25QcmV2KCk7XHJcblx0XHRcdFx0c2xkZVByZXYoKTtcclxuXHRcdFx0XHRzbGlkZXJEZXNjUHJldygpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQoJy5uZXh0Jykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRfbW92ZURvd24oKTtcclxuXHRcdFx0XHRfbW92ZVVQKCk7XHJcblx0XHRcdFx0c2xkZU5leHQoKTtcclxuXHRcdFx0XHRzbGlkZXJEZXNjTmV4dCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn0pKCk7XHJcblxyXG5pZiAoJCgnLnByZXYnKSAhPT0gbnVsbCkge1xyXG5cdHNsaWRlci5pbml0KCk7XHJcbn1cclxuXHJcblxyXG5cclxudmFyIHZhbGlkYXRlID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0dmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRiYWNrX2Zvcm1cIik7XHJcblx0dmFyIG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRiYWNrX2Zvcm1fX25hbWVcIik7XHJcblx0dmFyIGVyck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRiYWNrX2Zvcm1fX2Vycm9yLW5hbWVcIilcclxuXHR2YXIgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRiYWNrX2Zvcm1fX25hbWVcIik7XHJcblx0dmFyIGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRiYWNrX2Zvcm1fX21lc3NhZ2VcIik7XHJcblx0dmFyIGVyckNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRiYWNrX2Zvcm1fX2Vycm9yLW1lc3NhZ2VcIik7XHJcblx0dmFyIHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlZGJhY2tfZm9ybV9fc2VuZFwiKTtcclxuXHR2YXIgZGF0YSA9ICQoJy5mZWVkYmFja19mb3JtJykuc2VyaWFsaXplKCk7XHJcblxyXG5cdC8vYXV0aG9yaXphdGlvblxyXG5cdHZhciBsb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW5cIik7XHJcblx0dmFyIGxvZ2luUGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1waWNcIik7XHJcblx0dmFyIHBhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3NcIik7XHJcblx0dmFyIHBhc3NQaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3MtcGljXCIpO1xyXG5cdHZhciBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hcIik7XHJcblx0dmFyIGNoZWNrYm94RmFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tib3hfZmFjZVwiKTtcclxuXHR2YXIgY2hlY2tib3hUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoX19jaGVja2JveC10ZXh0XCIpO1xyXG5cdHZhciByYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdXRoX3JhZGlvLWlucHV0LXRydWVcIik7XHJcblx0dmFyIHJhZGlvVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdXRoX3JhZGlvLWlucHV0LXRleHRcIilcclxuXHR2YXIgZW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVudGVyXCIpO1xyXG5cclxuXHR2YXIgbG9naW5WYWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChsb2dpbi52YWx1ZT09XCJcIil7XHJcblx0XHRcdGxvZ2luLnBhcmVudE5vZGUuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XHJcblx0XHRcdGxvZ2luUGljLnN0eWxlLmZpbGwgPSBcInJlZFwiO1xyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHRsb2dpbi5wYXJlbnROb2RlLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGdyZWVuXCI7XHJcblx0XHRcdGxvZ2luUGljLnN0eWxlLmZpbGwgPSBcImdyZWVuXCI7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIHBhc3NWYWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChwYXNzLnZhbHVlPT1cIlwiKXtcclxuXHRcdFx0cGFzcy5wYXJlbnROb2RlLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZFwiO1xyXG5cdFx0XHRwYXNzUGljLnN0eWxlLmZpbGwgPSBcInJlZFwiO1xyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHRwYXNzLnBhcmVudE5vZGUuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgZ3JlZW5cIjtcclxuXHRcdFx0cGFzc1BpYy5zdHlsZS5maWxsID0gXCJncmVlblwiO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHZhciBjaGVja2JveFZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGNoZWNrYm94LmNoZWNrZWQgPT0gZmFsc2Upe1xyXG5cdFx0XHRjaGVja2JveEZhY2Uuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XHJcblx0XHRcdGNoZWNrYm94VGV4dC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcblx0XHR9IGVsc2V7XHJcblx0XHRcdGNoZWNrYm94RmFjZS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmVlblwiO1xyXG5cdFx0XHRjaGVja2JveFRleHQuc3R5bGUuY29sb3IgPSBcImdyZWVuIFwiO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHZhciByYWRpb1ZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGFyciA9IEFycmF5LmZyb20ocmFkaW9UZXh0KTtcclxuXHRcdGZvciAodmFyIGk9MDsgaSA8IHJhZGlvLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0aWYgKHJhZGlvW2ldLmNoZWNrZWQgPT0gdHJ1ZSAmJiByYWRpb1tpXS52YWx1ZSA9PSBcInllc1wiKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJPS1wiKTtcclxuXHRcdFx0XHRhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCIxXCIpO1xyXG5cdFx0XHRcdFx0aXRlbS5zdHlsZS5jb2xvciA9IFwiXCI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0fSBlbHNle1xyXG5cdFx0XHRcdGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIjJcIik7XHJcblx0XHRcdFx0XHRpdGVtLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vZHNkc2RcclxuXHJcblxyXG5cdHZhciBOYW1lVmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAobmFtZS52YWx1ZSA9PSBcIlwiKXtcclxuXHRcdFx0ZXJyTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlcnJOYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdHZhciBjb21tZW50VmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoY29tbWVudC52YWx1ZSA9PSBcIlwiKXtcclxuXHRcdFx0ZXJyQ29tbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlcnJDb21tZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRyZXR1cm57XHJcblx0XHRpbml0OmZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdE5hbWVWYWxpZGF0ZSgpO1xyXG5cdFx0XHRcdGNvbW1lbnRWYWxpZGF0ZSgpO1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0aWYgKE5hbWVWYWxpZGF0ZSgpICYgY29tbWVudFZhbGlkYXRlKCkpe1xyXG5cdFx0XHRcdFx0YWxlcnQoXCJTdWJtaXRlIC0gT0tcIik7XHJcblxyXG5cdFx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0XHR1cmw6ICdhc3NldHMvcmVzLnBocCcsXHJcblx0XHRcdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHQkKCcuZmVlZGJhY2tfZm9ybV9fbWVzc2FnZScpLmh0bWwoZGF0YSk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGVycm9yOiAgZnVuY3Rpb24oeGhyLCBzdHIpe1xyXG5cdFx0XHRcdFx0XHRcdGFsZXJ0KCfQktC+0LfQvdC40LrQu9CwINC+0YjQuNCx0LrQsDogJyArIHhoci5yZXNwb25zZUNvZGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2V7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHR2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRlbnRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0bG9naW5WYWxpZGF0ZSgpO1xyXG5cdFx0XHRcdHBhc3NWYWxpZGF0ZSgpO1xyXG5cdFx0XHRcdGNoZWNrYm94VmFsaWRhdGUoKTtcclxuXHRcdFx0XHRyYWRpb1ZhbGlkYXRlKCk7XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG59KSgpO1xyXG5cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRiYWNrXCIpICE9PSBudWxsKSB7XHJcblx0dmFsaWRhdGUuaW5pdCgpO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoX2NvbnRhaW5lclwiKSAhPT0gbnVsbCl7XHJcblx0dmFsaWRhdGUudmFsaWRhdGUoKTtcclxufTtcclxuXHJcblxyXG5cclxuIl19
