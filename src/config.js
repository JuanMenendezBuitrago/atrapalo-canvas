import FreeHand        from './tools/freehand';
import FreeHandToolbar from './toolbars/freehand';
import ColorsToolbar   from './toolbars/sections/colors';
import HistoryToolbar  from './toolbars/sections/history';
import StrokeToolbar   from './toolbars/sections/strokes';

const config = {
	"canvas"  : "canvas",
	"toolbar" : "toolbar",
	"sections": {
		"colors": {
			"class": ColorsToolbar,
			"id": "color-section"
		},
		"history": {
			"class": HistoryToolbar,
			"id": "history-section"
		},
		"strokes": {
			"class": StrokeToolbar,
			"id": "stroke-section"
		}
	},
	"tools" : {
		"freehand": {
			"isDefault" : true,
			"defaultColor": "#ff9933",
			"defaultWidth": "2px",
			"class": FreeHand,
			"toolbar":FreeHandToolbar,
			"sections" : [ "colors", "history", "strokes"]
		}
	},
	"filters" : {},
};

export default config;