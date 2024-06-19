document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "39a03ee093bfba064223e354cb3110f5";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const SubmitBox = document.querySelector("#submitText");
    const SubmitBtn = document.querySelector("#submitOption");
    const weatherIcon = document.querySelector(".weather-icon");

    async function FetchWeather(city) {
        try {
            const response = await fetch(apiUrl + city +`&units=metric`+`&appid=${apiKey}` );
            if (response.status === 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } 
            
            else {
                const data = await response.json();
                console.log(data);
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = data.main.temp + "°C";
                document.querySelector(".humidity p").innerHTML = data.main.humidity + "%";
                document.querySelector(".Wind p").innerHTML = data.wind.speed + " km/hr";

                switch (data.weather[0].main) {
                    case "Clouds":
                        weatherIcon.src = "cloudy.jpeg";
                        break;
                    case "Clear":
                        weatherIcon.src = "clear.png";
                        break;
                    case "Rain":
                        weatherIcon.src = "rainy.webp";
                        break;
                    case "Drizzle":
                        weatherIcon.src = "rain&thunder.webp";
                        break;
                    case "Mist":
                        weatherIcon.src = "mist.jpeg";
                        break;
                }
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
        } catch (error) {
            console.error("Error fetching weather data: ", error);
        }
    }

    SubmitBtn.addEventListener("click", () => {
        FetchWeather(SubmitBox.value);
    });
});
