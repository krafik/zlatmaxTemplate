// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

/*******  пояснение кода:
	будем делать через делегирование. поэтомувешаем событие клика на весь документ. 
*/
document.addEventListener("click", documentActions);
const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
	menuBlocks.forEach(menuBlock => {
		const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
		menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
	});
}
function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('[data-parent]')) {
		const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;

		const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
		const catalogMenu = document.querySelector('.catalog-header');
		if (subMenu) {
			const activeLink = document.querySelector('._sub-menu-active');
			const activeBlock = document.querySelector('._sub-menu-open');
			if (activeLink && activeLink !== targetElement) {
				activeLink.classList.remove('_sub-menu-active');
				activeBlock.classList.remove('_sub-menu-open');
			}
			// catalogMenu.classList.toggle('_sub-menu-show');
			targetElement.classList.toggle('_sub-menu-active');
			subMenu.classList.toggle('_sub-menu-open');

		} else {
			console.log('ой, ой, такого нет подменю');
		}
		e.preventDefault();
	}
}