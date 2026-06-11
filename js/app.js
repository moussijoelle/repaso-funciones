// DECLARACIÓN DE VARIABLES
const inputTemperatura = document.getElementById("temperatura");     // referencia al input de temperatura
const selectUnidad = document.getElementById("unidad");              // referencia al select C o F
const btnConvertir = document.getElementById("btnConvertir");        // referencia al botón Convertir
const parrafoMensaje = document.getElementById("mensaje");         // referencia al párrafo del resultado

// DECLARACIÓN DE FUNCIONES — BIBLIOTECA (independientes: solo parámetros, reutilizables en otros ejercicios)

const celsiusAFahrenheit = (celsius) => {                            // convierte un número de °C a °F
    return celsius * (9 / 5) + 32;                                   // aplica la fórmula y devuelve Fahrenheit
};

const fahrenheitACelsius = (fahrenheit) => {                           // convierte un número de °F a °C
    return (fahrenheit - 32) * (5 / 9);                              // aplica la fórmula y devuelve Celsius
};

const esTemperaturaValida = (texto) => {                             // comprueba si el input es válido
    let valido;                                                      // guardará true o false
    if (texto.trim() === "") {                                       // el campo está vacío
        valido = false;                                              // no es válido
    } else {                                                         // hay texto escrito
        valido = !Number.isNaN(Number(texto));                      // válido si se puede convertir a número
    }
    return valido;                                                   // un solo return
};

const esUnidadValida = (unidad) => {                                 // comprueba que la unidad sea C o F
    return unidad === "C" || unidad === "F";                         // true solo si es C o F
};

const formatearResultado = (valor, unidad) => {                      // monta el texto final (ej. 32°F)
    const simbolo = unidad === "C" ? "°C" : "°F";                    // elige °C o °F según destino
    const redondeado = Math.round(valor * 100) / 100;                // redondea a 2 decimales
    return `${redondeado}${simbolo}`;                                // junta número y símbolo
};

// FUNCIÓN PRINCIPAL (no es biblioteca: trabaja con el HTML de esta página)

const funcionMain = () => {                                          // coordina leer, validar, calcular y mostrar
    const texto = inputTemperatura.value;                            // lee la temperatura del input
    const unidad = selectUnidad.value;                               // lee si eligió C o F
    let salida;                                                      // texto que se mostrará en pantalla

    if (!esTemperaturaValida(texto)) {                               // temperatura no válida
        salida = "Escribe una temperatura válida.";                  // mensaje de error
    } else if (!esUnidadValida(unidad)) {                            // unidad no es C ni F
        salida = "Unidad no válida.";                                // mensaje de error
    } else {                                                         // datos correctos
        const valor = Number(texto);                                 // pasa el texto a número
        let convertido;                                              // resultado numérico de la conversión
        let destino;                                                 // letra de la unidad final (C o F)
        switch (unidad) {                                            // elige conversión según la unidad
            case "C":                                                // el usuario partió de Celsius
                convertido = celsiusAFahrenheit(valor);              // calcula Fahrenheit
                destino = "F";                                       // la unidad de destino es F
                break;                                               // sale del switch
            case "F":                                                // el usuario partió de Fahrenheit
                convertido = fahrenheitACelsius(valor);              // calcula Celsius
                destino = "C";                                       // la unidad de destino es C
                break;                                               // sale del switch
        }
        salida = formatearResultado(convertido, destino);            // prepara el texto para pantalla
    }

    parrafoMensaje.textContent = salida;                             // escribe el resultado (un solo sitio)
};

// EJECUCIÓN DE CÓDIGO
btnConvertir.addEventListener("click", funcionMain);                 // clic en Convertir → funcionMain
