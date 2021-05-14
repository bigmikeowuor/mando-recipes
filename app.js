const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

// show or hide the menu
burger.addEventListener('click', () => {
	if (menu.classList.contains('hidden')) {
		menu.classList.remove('hidden');
	} else {
		menu.classList.add('hidden');
	}
});
