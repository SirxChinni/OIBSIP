document.addEventListener("DOMContentLoaded", function () {
  const inputTemp = document.getElementById("inputTemp");
  const tempUnit = document.getElementById("tempUnit");
  const convertBtn = document.getElementById("convertBtn");
  const result = document.getElementById("result");

  convertBtn.addEventListener("click", function () {
    const temperature = parseFloat(inputTemp.value);
    const unit = tempUnit.value;

    if (isNaN(temperature)) {
      result.textContent = "Please enter a valid number.";
      return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {
      celsius = temperature;
      fahrenheit = (temperature * 9/5) + 32;
      kelvin = temperature + 273.15;
    } else if (unit === "fahrenheit") {
      celsius = (temperature - 32) * 5/9;
      fahrenheit = temperature;
      kelvin = (temperature - 32) * 5/9 + 273.15;
    } else if (unit === "kelvin") {
      celsius = temperature - 273.15;
      fahrenheit = (temperature - 273.15) * 9/5 + 32;
      kelvin = temperature;
    }

    result.innerHTML = `<strong>Celsius:</strong> ${celsius.toFixed(2)}°C<br>`;
    result.innerHTML += `<strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)}°F<br>`;
    result.innerHTML += `<strong>Kelvin:</strong> ${kelvin.toFixed(2)} K`;
  });
});
