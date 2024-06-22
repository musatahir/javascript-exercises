const convertToCelsius = function (farenTemp) {
  return parseFloat(((farenTemp - 32) * (5 / 9)).toFixed(1));

};

const convertToFahrenheit = function (celsTemp) {
  return parseFloat(((celsTemp * 9 / 5) + 32).toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
