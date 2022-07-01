var { rectangle, cube } = require('./class_export.js');
// import { rectangle, cube } from './class_export.js';

var Rectangle = new rectangle();
console.log('rectangle:', Rectangle.area());


var Cube = new cube();
console.log('cube:', Cube.volume());

