function getWeather() {
    var city = document.getElementById('city').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f81457a3d556f8463090f22181494dbe&units=metric&lang=es')
      .then(respuesta => respuesta.json())
      .then(datos => {
        var weather = document.getElementById('weather');
        weather.innerHTML = '<h2>' + datos.name + '</h2>';
        weather.innerHTML += '<p>Temperatura: ' + datos.main.temp + '°C</p>';
        weather.innerHTML += '<p>Estado: ' + datos.weather[0].description + '</p>';
        document.getElementById('city').value = '';
      });
  }