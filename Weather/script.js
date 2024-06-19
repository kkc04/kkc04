
const apiKey = "39a03ee093bfba064223e354cb3110f5";
const apiUrl = "https://pro.openweathermap.org/data/2.5/forecast/climate?units=metric";

const SubmitBox = document.querySelector(".Navbar input");
const SubmitBtn= document.querySelector(".Navbar button");
const weatherIcon = document.querySelector(".weather-icon");

async function FetchWeather(city) {


    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data = await response.json();//will fetch the data from json
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "cloudy.jpeg";

    }

    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";

    }


    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rainy.webp";

    }

    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "rain&thunder.webp";

    }

    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.jpeg";

    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}

}

SubmitBtn.addEventListener("click", ()=>{
    FetchWeather(SubmitBox.value);
})



