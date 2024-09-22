const express = require('express');
const axios = require('axios');
const app = express();

// Configurar EJS como el motor de plantillas
app.set('view engine', 'ejs');

// Hacer la carpeta 'public' accesible para archivos estáticos
app.use(express.static('public'));

// Ruta principal que renderiza la vista index.ejs
app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null });
});

// Lógica para obtener el clima
app.get('/getWeather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.render('index', { weather: null, error: 'Por favor, ingresa el nombre de una ciudad.' });
    }

    const apiKey = '0bbc1f4a7610c94134d8ef3997712243'; // API Key de OpenWeatherMap
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await axios.get(url);
        const weather = response.data;

        if (weather.cod !== 200) {
            return res.render('index', { weather: null, error: 'No se encontró la ciudad. Intenta de nuevo.' });
        }

        const icon = weather.weather[0].icon;
        const description = weather.weather[0].description;
        const temp = weather.main.temp;
        const cityName = weather.name;

        const weatherData = {
            city: cityName,
            temperature: temp,
            description: description,
            icon: `http://openweathermap.org/img/wn/${icon}.png`
        };

        // Renderizamos la página con los datos del clima
        res.render('index', { weather: weatherData, error: null });

    } catch (error) {
        console.error('Error al obtener el clima:', error.response ? error.response.data : error.message);
        res.render('index', { weather: null, error: 'No se pudo obtener el clima, intenta de nuevo.' });
    }
});

// Servidor escuchando en el puerto 3000
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
