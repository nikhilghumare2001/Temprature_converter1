let celsius = document.getElementById("celsius");
let Fahrenheit = document.getElementById("Fahrenheit");
let Kelvin = document.getElementById("Kelvin");

celsius.oninput = function () {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    Fahrenheit.value = parseFloat(f.toFixed(2));
    let k = parseFloat(celsius.value) + 273.15;
    Kelvin.value = parseFloat(k.toFixed(2));


}
Fahrenheit.oninput = function () {
    let c = ((parseFloat(Fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(f.toFixed(2));
    let k = ((parseFloat(Fahrenheit.value) - 32) * 5) / 9 + 273.15;
    Kelvin.value = parseFloat(k.toFixed(2));
}
Kelvin.oninput = function () {
    let f = ((parseFloat(Kelvin.value) - 273.15) * 9) / 5 + 32;
    Fahrenheit.value = parseFloat(f.toFixed(2));
    let C = parseFloat(Kelvin.value) - 273.15;
    celsius.value = parseFloat(k.toFixed(2));
}