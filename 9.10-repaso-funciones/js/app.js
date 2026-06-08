// DECLARACIÓN DE VARIABLES
const inputTemperatura = document.getElementById("temperatura"); // guarda el input donde el usuario escribe la temperatura
const selectUnidad = document.getElementById("unidad"); // guarda el select con C o F (unidad de origen)
const btnConvertir = document.getElementById("btnConvertir"); // guarda el botón Convertir
const parrafoMensaje = document.getElementById("mensaje"); // guarda el párrafo donde se muestra el resultado

// DECLARACIÓN DE FUNCIONES — BIBLIOTECA (independientes: solo parámetros, reutilizables en otros ejercicios)

const celsiusAFahrenheit = (celsius) => { // BIBLIOTECA: convierte un número de °C a °F
  return celsius * (9 / 5) + 32; // aplica la fórmula y devuelve el resultado en Fahrenheit
};

const fahrenheitACelsius = (fahrenheit) => { // BIBLIOTECA: convierte un número de °F a °C
  return (fahrenheit - 32) * (5 / 9); // aplica la fórmula y devuelve el resultado en Celsius
};

const esTemperaturaValida = (texto) => { // BIBLIOTECA: comprueba si lo escrito en el input es válido
  if (texto.trim() === "") return false; // si está vacío, no es válido
  return !Number.isNaN(Number(texto)); // si se puede pasar a número, es válido; si no, false
};

const esUnidadValida = (unidad) => { // BIBLIOTECA: comprueba que la unidad sea C o F
  return unidad === "C" || unidad === "F"; // true solo si es Celsius o Fahrenheit
};

const formatearResultado = (valor, unidad) => { // BIBLIOTECA: monta el texto que verá el usuario (ej. 32°F)
  const simbolo = unidad === "C" ? "°C" : "°F"; // elige el símbolo según la unidad de destino
  const redondeado = Math.round(valor * 100) / 100; // redondea a 2 decimales para que se vea limpio
  return `${redondeado}${simbolo}`; // junta número y símbolo y lo devuelve
};

// FUNCIÓN PRINCIPAL (no es biblioteca: trabaja con el HTML de esta página)

const funcionMain = () => { // PRINCIPAL: coordina leer, validar, calcular y mostrar
  const texto = inputTemperatura.value; // lee lo que hay escrito en el input (string)
  const unidad = selectUnidad.value; // lee si eligió C o F en el select

  if (!esTemperaturaValida(texto)) { // si la temperatura no es válida...
    parrafoMensaje.textContent = "Escribe una temperatura válida."; // ...muestra mensaje de error
    return; // sale de la función, no sigue calculando
  }

  if (!esUnidadValida(unidad)) { // si la unidad no es C ni F...
    parrafoMensaje.textContent = "Unidad no válida."; // ...muestra otro error
    return; // sale de la función
  }

  const valor = Number(texto); // pasa el texto a número para poder calcular
  let convertido; // aquí guardaremos el resultado de la conversión
  let destino; // aquí guardaremos la letra de la unidad final (C o F)

  if (unidad === "C") { // si el usuario partió de Celsius...
    convertido = celsiusAFahrenheit(valor); // ...llama a la biblioteca y obtiene Fahrenheit
    destino = "F"; // la unidad de destino es F
  } else { // si partió de Fahrenheit...
    convertido = fahrenheitACelsius(valor); // ...llama a la biblioteca y obtiene Celsius
    destino = "C"; // la unidad de destino es C
  }

  parrafoMensaje.textContent = formatearResultado(convertido, destino); // escribe en la página el texto final (ej. 32°F)
};

// EJECUCIÓN DE CÓDIGO
btnConvertir.addEventListener("click", funcionMain); // cuando hacen clic en Convertir, ejecuta funcionMain
