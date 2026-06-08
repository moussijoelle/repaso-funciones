// DECLARACIÓN DE VARIABLES

const formulario = document.getElementById("formTexto");      // paso: enlazar el formulario del HTML
const inputNombre = document.getElementById("texto");          // paso: enlazar el campo del nombre
const zonaResultado = document.getElementById("resultado");   // paso: enlazar la zona del mensaje


// DECLARACIÓN DE FUNCIONES

const normalizarTexto = (texto) => {                         // entrada: string completo
    return texto.trim();                                     // salida: string sin espacios al borde
};

const esLetra = (caracter) => {                              // entrada: un carácter
    return caracter.toLowerCase() !== caracter.toUpperCase(); // salida: true si es letra
};

const esCaracterPermitido = (caracter) => {                  // entrada: un carácter
    const esApostrofe = caracter === "'";                    // paso: comprobar apóstrofe
    const esEspacio = caracter === " ";                      // paso: comprobar espacio entre palabras
    return esLetra(caracter) || esApostrofe || esEspacio;    // salida: true si está permitido
};

const miFuncion = (texto) => {                               // entrada: nombre completo
    const limpio = normalizarTexto(texto);                   // paso: quitar espacios sobrantes al borde
    const tieneContenido = limpio.length > 0;                // paso: no aceptar cadena vacía
    const todosValidos = [...limpio].every(esCaracterPermitido); // paso: revisar cada carácter
    return tieneContenido && todosValidos;                   // salida: true si el nombre es válido
};

const mensajeValidacion = (esValido) => {                    // entrada: true o false
    return esValido ? "verdadero" : "falso";  // salida: texto para la pantalla
};

// FUNCIÓN PRINCIPAL (única que toca el DOM)

const funcionPrincipal = (evento) => {                       // entrada: evento del submit
    evento.preventDefault();                                 // paso: evitar recargar la página

    const nombreEscrito = inputNombre.value;                   // paso: leer el nombre escrito
    const esValido = miFuncion(nombreEscrito);               // paso: validar con la biblioteca
    const mensaje = mensajeValidacion(esValido);               // paso: obtener el mensaje
    zonaResultado.textContent = mensaje;                     // paso: mostrar resultado en el HTML
};


// EJECUCIÓN DE CÓDIGO

formulario.addEventListener("submit", funcionPrincipal);     // paso: al enviar, ejecutar la función principal
