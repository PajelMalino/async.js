const https = require('https');
    
const apiKey = '43fb15f1bdb641ec8f2e557fe25c039f'; 

const city = process.argv[2] || 'Jakarta';

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    https.get(url, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            const weather = JSON.parse(data);
            if (weather.main) {
                console.log(`Cuaca di ${city}:`);
                console.log(`Suhu: ${weather.main.temp}°C`);
                console.log(`Kelembaban: ${weather.main.humidity}%`);
                console.log(`Deskripsi: ${weather.weather[0].description}`);
            } else {
                console.log(`Kota ${city} tidak ditemukan.`);
            }
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

getWeather(city);