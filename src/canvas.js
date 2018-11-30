import Point from "./point";
import History from "./history";

/**
 * Class representing the canvas.
 */
export default class Canvas {
    /**
     * Constructor.
     * Sets some basic properties and launches initialization.
     * @param {object} app - The app holding the canvas.
     * @param {object} canvas - The canvas DOM Element.
     */
    constructor(app, canvas) {
        this.app     = app;
        this.history = new History(this);
        this.canvas  = canvas;
        this.height  = canvas.height = document.documentElement.clientHeight;
        this.width   = canvas.width = document.documentElement.clientWidth;
        this.context = canvas.getContext('2d');
        this.init();
    }

    /**
    * Initializes the canvas.
    * As for now, only sets event listeners.
    */
    init() {
        this.setEventListeners();
    }

    /** 
     * Refreshes the canvas contents (clears everything and redraws history).
     */
    refresh() {                
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.history.refresh();
    }

    /**
     * Sets listeners for user's actions on the canvas.
     */
    setEventListeners() {
        this.setMouseMoveListener();
        this.setMouseUpListener();
        this.setMouseLeaveListener();
        this.setMouseDownListener();
    }

    /**
     * Sets the listener for the action of moving the mouse over the canvas.
     * If the paint flag is set, adds a point to the history's current stroke and rfreshes.
     */
    setMouseMoveListener() {
        this.canvas.addEventListener('mousemove', (evt) => {
            let mousePos = this.getMousePos(evt);
            if (this.paint) {
                this.history.currentStroke.addPoint(new Point(mousePos.x, mousePos.y));
                this.refresh();
            }
        });
    }
    
    /**
     * Sets the listener for the action of releasing the mouse button while on the canvas.
     * It just sets the paint lag to false.
     */
    setMouseUpListener() {
        this.canvas.addEventListener('mouseup', () => {
            this.paint = false;
        });
    }

    /**
     * Sets the listener for the action of leaving the canvas.
     * It just sets the paint lag to false.
     * TODO: This could be improved adding an 'onMouseEnter' event handler.
     */
    setMouseLeaveListener(){
        this.canvas.addEventListener('mouseleave', () => {
            this.paint = false;
        });
    }

    /**
     * Sets the listener for the click event on the canvas,
     * It sets the paint flag to true and adds a new stroke to the history.
     */
    setMouseDownListener() {
        this.canvas.addEventListener('mousedown', (evt) => {
            let mousePos = this.getMousePos(evt);
            let point = new Point(mousePos.x, mousePos.y);
            let currentToolClass = this.app.tools[this.app.currentTool];
            this.paint = true;
            this.history.addStroke(currentToolClass, point);
        });
    }

    /**
     * Gets the mouse coordinates inside the canvas.
     * @param {object} evt - Event that is used for measuring the coordinates.
     */
    getMousePos(evt) {
        var rect = this.canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    }
}
