var BpmnModdle = require('bpmn-moddle');
 
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


//creando el BPMNPlane

 var bpmnDia = moddle.create('bpmndi:BPMNDiagram', {id: 'Diagram_1'});
    var bpmnPlane = moddle.create('bpmndi:BPMNPlane', {
        'bpmnElement': bpmnProcess,
        id: 'plane_1' 
    });
    bpmnDia.plane = bpmnPlane;


    definitions.get('diagrams').push(bpmnDia);
    di = bpmnPlane;

 
  moddle.toXML(definitions, function(err, xmlStrUpdated) {
    console.log(xmlStrUpdated);
    // xmlStrUpdated contains new id and the added process 
 
  });
 
});