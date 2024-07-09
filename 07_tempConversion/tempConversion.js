const convertToCelsius = function(temp) {
  var number = (temp - 32) * 5/9;
  var rounded = Math.round(number * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  var number = temp * 9/5 + 32;
  var rounded = Math.round(number * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
