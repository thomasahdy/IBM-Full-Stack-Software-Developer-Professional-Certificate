function showweatherDetails(event) {
    event.preventDefault(); // stop form refresh
  
    const city = document.getElementById('city').value.trim();
    const apiKey = '1335adb6f51fe45fdf7b5851d84efdb0';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    if (!city) {
      alert("Please enter a city name!");
      return;
    }
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
  
        if (data.cod !== 200) {
          weatherInfo.innerHTML = `<p style="color:red;">Error: ${data.message}</p>`;
          return;
        }
  
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        console.error("Error fetching weather:", error);
      });
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
  