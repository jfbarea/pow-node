const times = 1000000000;
var isInside = (point) => {
  var square = (num) => Math.pow(num, 2);
  return square(point.x - 0.5) + square(point.y - 0.5) <=  square(0.5);
};

var generatePoint = () => {
  var point = {};
  point.x = Math.random();
  point.y = Math.random();
  return point;
};

var calculateError = (actual, calculated) => {
    var diff = Math.abs(actual - calculated);
    console.log(diff);
    console.log((diff / actual) * 100);
    return ((diff / actual) * 100);
};

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
