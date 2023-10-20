// const key = 'ce132422407520023eecdc10f18d3e1c';
// const lat = '-31.5375000';
// const long = '-68.5363900';

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`)
//     .then(response => response.json())
//     .then(data => {
//         const climaElement = document.getElementById('clima');
//         const tempCelsius = data.main.temp - 273.15;  //conversión de farenheit a celcius

//         climaElement.innerHTML = `
//             <p>Temperatura: ${tempCelsius.toFixed(2)} °C</p>
//         `;
//     })
//     .catch(err => console.error('Error: ', err));
//********************************************************************************************************** */



const url = "https://api.openweathermap.org/data/2.5/weather?lat=-31.5375000&lon=-68.5363900&appid=ce132422407520023eecdc10f18d3e1c";

const { createApp } = Vue

createApp({
    data() {
        return {
            lat: 0,
            long: 0,
            temp: 0,
            hum: 0,
            prov: ''
        }
    },
    created() {
        this.fetchWeadther();
    },
    methods: {
        async fetchWeadther() {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    this.lat = data.coord.lat;
                    this.long = data.coord.lon;

                    // Calcular los grados Celsius
                    const ce = parseFloat(data.main.temp);
                    // Pasamos de Farenheit a Celsius y redondeamos a un dígito después de la coma
                    const celsius = (ce - 273.15).toFixed(1);
                    // Mostramos
                    this.temp = celsius;

                    this.hum = data.main.humidity;
                    this.name = data.name;
                }
            } catch (err) {
                console.error('Error en la carga de los datos', err);
            }
        }
    },
}).mount('#clima')