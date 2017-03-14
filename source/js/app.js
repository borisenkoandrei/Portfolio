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
                activeItem.first().removeClass("down");
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
            $('.arrow-u').on("click", function (e) {
                e.preventDefault();
                _moveUPPrev();
                _moveDownPrev();
                sldePrev();
                sliderDescPrew();
            });

            $('.arrow-d').on("click", function (e) {
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