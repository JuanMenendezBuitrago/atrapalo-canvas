/**
 * Class representing a list of points.
 *
 * - Every stroke belongs to the Canvas' History object and has a tool associated to it.
 * - The list of points stored in a Stroke will be used by its tool to perform an action on the Canvas.
 */
export default class Stroke  {
	/**
	 * Constructor.
	 * @param {object} history - The history object to which this stroke belongs.
	 * @param {fn} tool - The tool class  that will be attached to this stroke.
	 * @param {object} points - The points to be added to the stroke (usually just one).
	 */
	constructor(history, tool, ...points) {
		this.history = history;
		this.tool = new tool(history.canvas.app.toolbar);		
		this.pointsList = [];
		if (points.length) {
			this.pointsList.push.apply(this.pointsList, points);
		}	
	}
	/**
	 * It adds a point to the poits list.
	 */
	addPoint(point){
		this.pointsList.push(point)
	}

	/** 
	 * Refeshes the canvas with the tool and the Stroke points
	 */
	refresh() {
		this.tool.refresh(this.history.canvas, this.pointsList);
	}
}