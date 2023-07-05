const apiKey= "c3b6561062177fc3c7f41810ed2dfc63";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main == "Cloud"){
    weatherIcon.src= "images/cloud.svg"
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src= "images/clear.png"
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.svg"
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src= "images/mist.svg"
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images\weather_downpour_sun.svg"
  }
}
searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
})

