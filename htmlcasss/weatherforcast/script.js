document.getElementById("getWeatherBtn").addEventListener("click", function() {
    const location = document.getElementById("locationInput").value;
    const apiKey = "538904da1cbe42d893875213251208"; // Your API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Location not found");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("weatherResult").classList.remove("hidden");
            document.getElementById("cityName").textContent = data.location.name + ", " + data.location.country;
            document.getElementById("temperature").textContent = data.current.temp_c;
            document.getElementById("condition").textContent = data.current.condition.text;
            document.getElementById("humidity").textContent = data.current.humidity;
        })
        .catch(error => {
            alert(error.message);
        });
});
