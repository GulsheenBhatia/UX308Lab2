// take a temperature in celsuis and output the marine forecast
var temperature = 'asdf';

var forecast;

if (temperature < 0) {
  forecast = 'hard';
} else if (temperature < 100) {
  forecast = 'wet';
} else if (temperature >= 100) {
  forecast = 'steamy';
} else {
  forecast = 'enter a number';
}

console.log(
  `if the temperature is ${temperature} the marine forecast is ${forecast}`
);
