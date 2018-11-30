import Canvas   from './canvas';
import Toolbar from './toolbars/toolbar';
import config   from './config';

class App {
	/**
	 * Constructor.
	 * sets the config data, bootstraps tools based on config and initializes.
	 * @param {object} config - The app configuration.
	 */
	constructor(config) {
		this.config = config;
		this.bootstrap();
		this.init();
	}

	/**
	 * Bootstraps based on config information (only tools for now).
	 */
	bootstrap() {
		this.setTools();
	}

	/**
	 * Sets tools information based on config settings.
	 */
	setTools() {
		if (this.config.tools == undefined || typeof this.config.tools != 'object') throw 'Exception setting tools!'; //TODO

		this.tools = {};
		for (let tool in this.config.tools) {
			this.tools[tool] = this.config.tools[tool].class;
            this.currentTool = this.config.tools[tool].isDefault ? tool : undefined;
		}
	}

	/**
	 * Instatiates toolbar.
	 */
	initToolbar() {
		this.toolbar = new Toolbar(this, document.getElementById('toolbar'));
		if (!this.toolbar) throw 'Exception setting the toolbar!'; // TODO
		this.toolbar.setTool(this.currentTool);
	}

	/**
	 * Instatiates canvas
	 */
	initCanvas() {
		this.canvas = new Canvas(this, document.getElementById(this.config.canvas || 'canvas'));
		if (!this.canvas) throw 'Exception setting the canvas!'; // TODO
	}

	/**
	 * Initializes app elements.
	 */
	init() {
		this.initCanvas();
		this.initToolbar();
	}
}

var app = new App(config);
