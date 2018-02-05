

var tapButton = document.querySelector('#tap-button');
var mobileMenu      = document.querySelector('#mobile-menu');
var menuIsOpen = true




function tapMenu() {
	menuIsOpen = !menuIsOpen

	if (menuIsOpen) {
		mobileMenu.className = 'mobile-menu';
	}	else {
		mobileMenu.className = 'mobile-menu open';
	}
}

tapButton.addEventListener('click', tapMenu);
