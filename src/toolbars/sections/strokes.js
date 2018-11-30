export default class StrokeSection {
	/**
	 * Constructor.
	 * @param {object} app - The running app.
	 * @param {object} section - The section DOM Element.
	 */
	constructor(app, section) {
		this.app = app;
		this.section = section;
		this.activeWidth = app.config.tools.freehand.defaultWidth;
		this.init();
	}

	/**
	 * Initializes the DOM Element events listeners and sets the current active color.
	 */
	init() {
		this.setEventsListeners();
		this.markItemAsSelected(this.findItemByWidth(this.activeWidth));
	}

	/**
	 * Finds element in the section with the given width.
	 * @param {string} width - The width to find.
	 */
	findItemByWidth(width) {
		const items = Array.from(this.section.querySelectorAll('.item.stroke a i'));
		let result = items.find( (element) => {
			return width == window.getComputedStyle(element).height;
		});
		
		if(result) 
			return result.parentElement.parentElement;

		return items[0].parentElement.parentElement;
	}

	/**
	 * Sets the event listeners for each width link.
	 */
	setEventsListeners() {
		let widths = this.section.querySelectorAll('.item.stroke');
		widths.forEach(widthElement => {
			widthElement.addEventListener('click', (evt) => {
				this.markItemAsSelected(evt.currentTarget);
			});
		});
	}

	/**
	 * Marks the given item as selected and 'unselect' the rest.
	 * It also stores the selected widthas the active width in this instance.
	 * @param {object} item - The DOM Element to set as selected.
	 */
	markItemAsSelected(item) {
		this.section.querySelectorAll('.stroke.selected').forEach(item => item.classList.remove('selected'));
		item.classList.add('selected');
		
		this.activeWidth = window.getComputedStyle(this.section.querySelector('.stroke.selected a i')).height;
	}
}