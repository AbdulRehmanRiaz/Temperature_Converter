function convertTemperature() {
  const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);

  const selectUnit = document.getElementById("selectUnit").value;
    let result = "";

  if (selectUnit === "celsius") {
    const fahrenheit = (inputTemperature * 9 / 5) + 32;
    result = `${inputTemperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
  }
   else if (selectUnit === "fahrenheit") {
    const celsius = (inputTemperature - 32) * 5 / 9;
    result = `${inputTemperature}°F is equal to ${celsius.toFixed(2)}°C`;
  } 
    else {
    result = "Please select a unit.";
  }

  document.getElementById("result").textContent = result;
}
function resetValues() {
  document.getElementById("inputTemperature").value = "";
  document.getElementById("selectUnit").selectedIndex = 0;
  document.getElementById("result").textContent = "";
}