import Stroke from "./stroke";

export default class History {
	constructor(canvas) {
		this.canvas = canvas;
		this.currentStrokeIndex = -1;
		this.strokesList = [];
		this.observers = [];
	}

	set current(value) {
		this.currentStrokeIndex = value;
		this.notifyObservers();
	}
	
	get current() {
		return this.currentStrokeIndex;
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	notifyObservers() {
		this.observers.forEach(observer => {
			observer.onNotify();
		})
	}

	addStroke(tool, point) {				
		let newCurrent = this.current + 1;
		if (this.strokesList[newCurrent]) {
			this.strokesList = this.strokesList.slice(0, newCurrent);
		}
		this.strokesList.push(new Stroke(this, tool ,point));
		this.current = newCurrent;
	}

	moveUp() {
		if (this.currentStrokeIndex < this.strokesList.length - 1) {
			this.current += 1;
		}
	}

	moveDown() {
		if (this.currentStrokeIndex >= 0) {
			this.current -= 1;
		}
	}

	refresh() {
		this.strokesList.forEach((stroke, i) => {
			(i <= this.currentStrokeIndex) && stroke.refresh();
		});
	}

	get currentStroke() {
		return this.strokesList[this.currentStrokeIndex];
	}
}
