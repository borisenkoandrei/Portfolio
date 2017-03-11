/**
 * Created by Andrey on 06.03.2017.
 */
var swipe = function () {
    var swipeButton = document.querySelector(".lable"),
        swipeSection = document.querySelector(".blog__left"),
		container = $(".")
		;
    return{
        init: function () {
            swipeButton.addEventListener("click", function (e) {
                console.log(e.target)
                if (swipeSection.classList.contains("blog__left_active")){
                    swipeSection.classList.remove("blog__left_active");
                } else {
                    swipeSection.classList.add("blog__left_active");
                }
            })
        }
    }
};

if (document.querySelector(".blog__left") !== null){
	var menu = document.querySelector(".blog__left");

	menu.addEventListener("click",function (e) {
		console.log(this);
	}, true);
	swipe().init();

}