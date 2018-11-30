/**
 * Class representing the colors section.
 */
export default class ColorsSection {
	/**
	 * Constructor.
	 * @param {object} app - The running app.
	 * @param {object} section - The section DOM Element.
	 */
	constructor(app, section) {
		this.app = app;
		this.section = section;
		this.activeColor = app.config.tools.freehand.defaultColor;
		this.init();
	}

	/**
	 * Initializes the DOM Element events listeners and sets the current active color.
	 */
	init() {
		this.setEventsListeners();
		this.markItemAsSelected(this.findItemByColor(this.activeColor));
	}

	/**
	 * Finds element in the section with the given color.
	 * @param {string} color - The color to find.
	 */
	findItemByColor(color) {
		const items = Array.from(this.section.querySelectorAll('.item'));
		let result = items.find( (element) => {
			return color == window.getComputedStyle(element).backgroundColor;
		});
		
		if(result) 
			return result;

		return items[0];
	}

	/**
	 * Sets the event listeners for each color link.
	 */
	setEventsListeners() {
		let colors = this.section.querySelectorAll('.item');
		colors.forEach(colorElement => {
			colorElement.addEventListener('click', (evt) => {
				this.markItemAsSelected(evt.currentTarget);
			});
		});
	}

	/**
	 * Marks the given item as selected and 'unselect' the rest.
	 * It also stores the selected color as the active color in this instance.
	 * @param {object} item - The DOM Element to set as selected.
	 */
	markItemAsSelected(item) {
		this.section.querySelectorAll('.selected').forEach(item => item.classList.remove('selected'));
		item.classList.add('selected');

		this.activeColor = window.getComputedStyle(this.section.querySelector('.selected a')).backgroundColor;
	}
}