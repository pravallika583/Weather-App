const apiKey="5b9add7226c8dd336742fce01e4eda18";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";



var inputElement = document.getElementById("inputtext");
var searchElement = document.getElementById("searchBtn");
var cityElement = document.getElementById("cityname");


async function checkweather(){
      const response = await fetch(apiUrl+ `&appid=${apiKey}` + `&q=${inputElement.value}`);
      var data = await response.json();
      console.log(data);
      cityElement.innerHTML=data.name;
      document.getElementById("temp").innerHTML=data.main.temp + "°C";
      document.getElementById("humidity").innerHTML=data.main.humidity +  "%";
      document.getElementById("wind").innerHTML=data.wind.speed +  "km/h";
      document.getElementById("desc").innerHTML=data.weather[0].description;
}





searchElement.addEventListener("click", ()=>{
      checkweather();
      inputElement.value="";
})