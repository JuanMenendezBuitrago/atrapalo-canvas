/**
 * Class representing the toolbar
 */
export default class Toolbar {
	/**
	 * Constructor.
	 * @param {object} app - The app that owns the toolbar.
	 * @param {object} toolbar - The toolbar DOM Element.
	 */
	constructor(app, toolbar) {
		this.app          = app;
		this.toolbar      = toolbar;
		this.sections     = [];
		this.sectionsData  = {};
	}

	/**
	 * Sets the tool for this toolbar.
	 * Collects what sections apply to his tool, adds them to the DOM and adds event listeners.
	 * @param {string} type - The name of the tool as it is stored in the config.
	 */
	setTool(type) {
		this.getSectionsInfo(this.app.config.tools[type].sections);
		this.removeSectionsFromDOM();
		this.insertSectionsInDOM();
		this.initSections();
	}

	/**
	 * Collects the sections that apply to this tool.
	 * @param {object}  sectionNames - The list of sections.
	 */
	getSectionsInfo(sectionNames) {
		sectionNames.forEach((name) => {
			this.sections.push(this.app.config.sections[name]);
		});
	}

	/**
	 * Remove section elements from the DOM.
	 */
	removeSectionsFromDOM() {
		while (this.toolbar.firstChild) {
			this.toolbar.removeChild(this.toolbar.firstChild);
		}
	}

	/**
	 * Inserts section elements in the DOM.
	 */
	insertSectionsInDOM() {
		this.sections.forEach((item) => {
			let element = this.createSectionDivFromTemplate(item);
			this.toolbar.appendChild(element);
		});
	}

	/**
	 * Instantiates section objects if they don't exist already.
	 */
	initSections() {
		this.sections.forEach((item) => {
			if(!this.sectionsData[item.id])
				this.sectionsData[item.id] = new item['class'](this.app, document.getElementById(item.id));
		});
	}

	/**
	 * Creates DOM element from section template.
	 * @param {string} section - The id of the section.
	 * @returns The DOM Element that holds the section.
	 */
	createSectionDivFromTemplate(section) {
		let div = document.createElement('div');
		div.setAttribute('id', section.id);
		div.classList.add('section');
		div.innerHTML = document.getElementById(section.id).innerHTML;
		return div;
	}
}