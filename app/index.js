import _ from 'lodash';
import paper from 'paper';
import BpmnModdle from 'bpmn-moddle';


var moddle = new BpmnModdle();

var xmlStr =
  '<?xml version="1.0" encoding="UTF-8"?>' +
  '<bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" id="empty-definitions" targetNamespace="http://bpmn.io/schema/bpmn">' +
  '</bpmn2:definitions>';


moddle.fromXML(xmlStr, function(err, definitions) {

  // update id attribute
  definitions.set('id', 'NEW ID');

  // add a root element
  var bpmnProcess = moddle.create('bpmn:Process', { id: 'MyProcess_1' });

  definitions.get('rootElements').push(bpmnProcess);

  console.log(definitions);
  moddle.toXML(definitions, function(err, xmlStrUpdated) {

    // xmlStrUpdated contains new id and the added process

  });

});

window.onload = function() {
		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
		var path = new paper.Path();
		// Give the stroke a color
		path.strokeColor = 'black';
		var start = new paper.Point(100, 100);
		// Move to start and draw a line from there
		path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add([ 200, -50 ]));
		// Draw the view now:
		paper.view.draw();
	}