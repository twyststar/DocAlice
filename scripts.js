var canvas = document.getElementById('gameboard');
var ctx = canvas.getContext('2d');

// TODO - build in helpful fallback for non-supported browsers. From MDN:
//   var canvas = document.getElementById('gameboard');

// if (canvas.getContext) {
//   var ctx = canvas.getContext('2d');
//    drawing code here
// } else {
//    canvas-unsupported code here
// }