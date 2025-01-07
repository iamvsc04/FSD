const temperatureConverter = {
  toCelsius: (temp) => (temp - 32) * (5 / 9),
  toFahrenheit: (temp) => (temp * 9) / 5 + 32,
};

console.log(
  `55 degrees Celsius in Fahrenheit is: ${Math.ceil(
    temperatureConverter.toCelsius(55)
  )}`
);
console.log(
  `13 degrees Fahrenheit in Celsius is: ${temperatureConverter.toFahrenheit(
    13
  )}`
);
