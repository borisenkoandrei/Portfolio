/**
 * Created by Andrey on 06.03.2017.
 */
var swipe = function () {
    var swipeButton = document.querySelector(".lable"),
        swipeSection = document.querySelector(".blog__left"),
		items = document.getElementsByClassName("blog-nav__item");
    	console.log(items);

    var removeActive = function () {
    	for (i = 0; i< items.length; i++){
    		items[i].classList.remove("blog-nav__item_active");
		}

	};

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
        },
		click: function (e) {
			for (i = 0; i< items.length; i++){
				items[i].addEventListener('click', function (e) {
					removeActive();
					e.target.parentNode.classList.add("blog-nav__item_active");
					console.log(e.target.parentNode);
				})
			}

		}
    }
};

if (document.querySelector(".blog__left") !== null){
	swipe().init();
	swipe().click();

}