/**
 * Class representing he history section
 */
export default class HistorySection {
	/**
	 * Constructor.
	 * @param {object} app - The running app.
	 * @section {object} section - The section DOM Element.
	 */
	constructor(app, section) {
		this.app = app;
		this.section = section;
		this.history = app.canvas.history;
		this.init();
	}

	/**
	 * Initializes the DOM Element events listeners and sets the current active color.
	 */
	init() {
		this.history.addObserver(this);
		this.setEventsListeners();
	}

	/**
	 * Sets the event listeners for the undo and redo buttons.
	 * Updates the history current index and refreshes the canvas.
	 */
	setEventsListeners() {
		this.section.querySelector('.undo').addEventListener('click', () => {
			this.history.moveDown();
			this.app.canvas.refresh();
		});
		this.section.querySelector('.redo').addEventListener('click', () => {
			this.history.moveUp();
			this.app.canvas.refresh();
		});
	}

	/**
	 * Receives the notification as an observer and updates the state of the buttons.
	 */
	onNotify(){
		if (this.history.current >= 0)
			this.section.querySelector('.undo').classList.add('active');
		else
			this.section.querySelector('.undo').classList.remove('active');

		if (this.history.current < this.app.canvas.history.strokesList.length-1)
			this.section.querySelector('.redo').classList.add('active');
		else
			this.section.querySelector('.redo').classList.remove('active');
	}
}