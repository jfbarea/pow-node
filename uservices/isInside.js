exports.isInside = (point) => {
  var square = (num) => Math.pow(num, 2);
  return square(point.x - 0.5) + square(point.y - 0.5) <=  square(0.5);
};
