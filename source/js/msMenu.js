var hamburgerButton = document.querySelector('.hamburger__img'),
	fsMEnu = document.querySelector('.fs__wrapper'),
	fsMenuStyle = fsMEnu.style;


hamburgerButton.addEventListener('click', function (e) {
	if (hamburgerButton.classList.contains('active')){
		hamburgerButton.classList.remove("active");
		fsMenuStyle.display = 'none';
		document.body.style.overflow = '';

	} else{
		hamburgerButton.classList.add("active");
		fsMenuStyle.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	console.log("clock");




});
