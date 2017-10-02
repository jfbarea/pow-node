const isInside = require('./isInside.js').isInside;
const generatePoint = require('./generatePoint.js').generatePoint;
const calculateError = require('./calculateError.js').calculateError;
const times = 100000000;

var main = () => {
  var inside = 0;
  var currentPoint = {};
  for (var i = 0; i <= times; i++) {
    currentPoint = generatePoint();
    if (isInside(currentPoint)) inside++;
  }
  var pi = 4 * inside / times ;
  console.log('Inside is : ' + inside);
  console.log('Total is : ' + times);
  console.log('Pi is : ' + Math.PI);
  console.log('Calculated pi is : ' + pi);
  console.log('Error: ' + calculateError(Math.PI, pi) + '%');
  console.log('Max error: ' + 100 / Math.sqrt(times) + '%');
}
main();
