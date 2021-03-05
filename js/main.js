 
let api = "https://api.openweathermap.org/data/2.5/weather?zip="
 
let apiid = ",us&appid=";
 
let key = "2a891f25c80028033b31396fe83cee9e";
 
function roundNum(x) {
    return x.toFixed(2)
}
 
var input = document.getElementById('zip')
 
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        callAPI();
    }
})
 
async function callAPI() {
    var zipcode = document.getElementById('zip').value;
    const response = await fetch(api + zipcode + apiid + key);
    const data = await response.json();
 
    if (data.cod == "404") {
        return alert("invalid zipcode")
    }
    const name = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].main;
    const fhite = ((temp - 273.15) * 1.8) + 32;
    const celsius = temp - 273.15;
    

    //retreiving 
    document.getElementById('degree').style = "";
    document.getElementById('city').textContent = name;
    document.getElementById('kelvin').textContent = temp + "°";
    document.getElementById('fahrenheit').textContent = roundNum(fhite) + "°";
    document.getElementById('celsius').textContent = roundNum(celsius) + "°";
    document.getElementById('condition').textContent = description;
 
}
 