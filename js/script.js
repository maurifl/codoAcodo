const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault()
    if (nombre.value.length >= 6) {
        console.log("Entro al nombre");
        if (email.value.length >= 5) {
            console.log("entro al email");
            if (mensaje.value.length >= 1) {
                console.log("entro al mensaje");
            } else {
                valida2();
            }
        } else {
            valida1();
        }
    } else {
        valida();
    }
})

function valida() {
    alert("Verifique el campo NOMBRE, exite al menos un error, intentelo nuevamente.");
    nombre.focus();
}

function valida1() {
    alert("Verifique el campo EMAIL, exite al menos un error, intentelo nuevamente.");
    email.focus();
}

function valida2() {
    alert("Verifique el campo MENSAJE, exite al menos un error, intentelo nuevamente.");
    mensaje.focus();
}

function envio() {
    form.reset();
    nombre.focus();
}

/* ******************************************** */




// API CLIMA

//795d835912b049bbb6781500231510

// const apiKey = '795d835912b049bbb6781500231510';
// const ciudad = 'San Juan';

// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Actualiza los elementos HTML con los datos del clima
//     document.getElementById('temperatura').textContent = `${data.main.temp}°C`;
//     document.getElementById('descripcion').textContent = data.weather[0].description;
//     document.getElementById('humedad').textContent = `${data.main.humidity}%`;
//   })
//   .catch(error => {
//     console.error('Hubo un error al obtener los datos del clima:', error);
//   });
