// ─── DECLARACIÓN DE VARIABLES ───────────────────────────────────────────────

const formulario = document.getElementById("formFecha");           // enlace HTML: <form id="formFecha">
const inputFecha = document.getElementById("fecha");               // enlace HTML: <input id="fecha">
const contenedorResultado = document.getElementById("resultado");  // enlace HTML: <div id="resultado">


// ─── DECLARACIÓN DE FUNCIONES (biblioteca) ────────────────────────────────

const obtenerFechaHoy = () => new Date(2026, 3, 1);                // entrada: — | salida: Date (1 abr 2026, referencia del enunciado)

const crearFechaDesdeInput = (valorInput) =>                        // entrada: string "YYYY-MM-DD" del calendario | salida: Date
    new Date(valorInput + "T00:00:00");                            // convierte el valor del input sin desfase horario

const esFechaValida = (fecha) =>                                    // entrada: Date | salida: boolean
    !Number.isNaN(fecha.getTime());                                // true si la fecha existe y es válida

const esFechaAnteriorAHoy = (fechaPasada, fechaHoy) =>              // entrada: Date, Date | salida: boolean
    fechaPasada <= fechaHoy;                                       // true si la fecha no es futura

const calcularAniosTranscurridos = (fechaPasada, fechaHoy) => {     // entrada: Date, Date | salida: number
    let edad = fechaHoy.getFullYear() - fechaPasada.getFullYear(); // resta el año de hoy menos el año de la fecha
    let diferenciaMeses = fechaHoy.getMonth() - fechaPasada.getMonth(); // diferencia de meses (0 = enero en JS)
    if (                                                           // si aún no pasó el cumpleaños este año
        diferenciaMeses < 0 ||                                    // estamos en un mes anterior al del cumple
        (diferenciaMeses === 0 && fechaHoy.getDate() < fechaPasada.getDate()) // mismo mes pero día anterior al cumple
    ) {
        edad--;                                                   // resta un año porque el cumple no ha llegado
    }
    return edad;                                                  // devuelve años completos transcurridos
};

const formatearMensajeAnios = (anios) =>                            // entrada: number | salida: string
    `Han pasado ${anios} año${anios === 1 ? "" : "s"}.`;           // arma el texto del resultado para el usuario

const formatearMensajeError = (texto) => texto;                    // entrada: string | salida: string (mensaje de error)


// ─── FUNCIÓN PRINCIPAL (única que usa el DOM) ───────────────────────────────

const funcionMain = (evento) => {                                  // entrada: Event submit | salida: void
    evento.preventDefault();                                       // evita que el formulario recargue la página

    const valorFecha = inputFecha.value;                           // lee la fecha del calendario (formato YYYY-MM-DD)
    const fechaPasada = crearFechaDesdeInput(valorFecha);          // lo convierte en objeto Date
    const fechaHoy = obtenerFechaHoy();                            // obtiene la fecha de hoy

    if (!esFechaValida(fechaPasada)) {                             // comprueba que la fecha sea válida
        contenedorResultado.textContent = formatearMensajeError("Fecha no válida.");
        return;                                                    // detiene la función si hay error
    }

    if (!esFechaAnteriorAHoy(fechaPasada, fechaHoy)) {             // comprueba que no sea una fecha futura
        contenedorResultado.textContent = formatearMensajeError("La fecha no puede ser futura.");
        return;                                                    // detiene la función si hay error
    }

    const anios = calcularAniosTranscurridos(fechaPasada, fechaHoy); // calcula años con la biblioteca
    const mensaje = formatearMensajeAnios(anios);                   // prepara el mensaje con la biblioteca
    contenedorResultado.textContent = mensaje;                       // escribe el resultado en pantalla
};


// ─── EJECUCIÓN DE CÓDIGO ────────────────────────────────────────────────────

formulario.addEventListener("submit", funcionMain);                // al enviar el formulario ejecuta funcionMain
