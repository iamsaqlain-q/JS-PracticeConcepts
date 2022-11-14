function toCelsius(fahrenheit) {
    return  Math.round((fahrenheit - 32) * 5 / 9);
}
  console.log(toCelsius(75));

  function toFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5) + 32);
}
console.log(toFahrenheit(25));