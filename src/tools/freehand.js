/**
 * Class representing the freehand tool.
 */
export default class FreeHand {
	/**
	 * Constructor.
	 * @param {object} toolbar - The toolbar where this tool properties are stored.
	 */
	constructor(toolbar) {
		this.toolbar = toolbar;
		this.properties = {};
		this.readToolProperties();
	}

	/**
	 * Reads tools properties stored in the toolbar.
	 */
	readToolProperties() {
		this.readColor();
		this.readStrokeWidth();
	}

	/**
	 * Reads color from the toolbar color section.
	 */
	readColor() {
		this.properties['strokeStyle'] = this.toolbar.sectionsData['color-section'].activeColor;
	}

	/**
	 * Reads stroke width from the toolbar stroke section.
	 */
	readStrokeWidth() {
		this.properties['lineWidth'] = this.toolbar.sectionsData['stroke-section'].activeWidth;
	}

	/**
	 * Refresh the canvas.
	 * This is how the refreshing action takes place for this given tool.
	 * @param {object} canvas - The canvas DOM Element where these actions will take place.
	 * @param {object} points - The points used for refreshing.
	 */
	refresh(canvas, points) {
		canvas.context.lineJoin    = 'round'; 
		canvas.context.lineWidth   = parseInt(this.properties.lineWidth); 

		points.forEach((point, i, points) => {
			canvas.context.beginPath();
			if (i == 0) {
				// point.x - 1 is necessary for drawing 
				// points where starting nd ending coords are the same
				canvas.context.moveTo(point.x - 1, point.y);						
			}
			else {
				canvas.context.moveTo(points[i-1].x, points[i-1].y);						
			}
			canvas.context.lineTo(point.x, point.y);
			canvas.context.closePath();
			canvas.context.strokeStyle = this.properties.strokeStyle;
			canvas.context.stroke();
		});
	}
}
