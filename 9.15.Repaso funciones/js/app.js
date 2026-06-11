// DECLARACIÓN DE VARIABLES

const formulario = document.getElementById("formTexto");      // enlace con el formulario
const inputEmail = document.getElementById("texto");          // enlace con el input
const zonaResultado = document.getElementById("resultado");   // enlace con la zona del resultado


// DECLARACIÓN DE FUNCIONES

const normalizarTexto = (texto) => {                         // entrada: string | salida: string
    return texto.trim();                                     // quita espacios al borde
};

const tieneUnaSolaArroba = (texto) => {                      // entrada: string | salida: boolean
    const cantidad = [...texto].filter((c) => c === "@").length; // cuenta las @
    return cantidad === 1;                                   // true si hay exactamente una
};

const obtenerPartes = (texto) => {                           // entrada: string | salida: array
    const indice = texto.indexOf("@");                       // posición de la @
    return [texto.slice(0, indice), texto.slice(indice + 1)]; // [parte local, dominio]
};

const esLetra = (caracter) => {                              // entrada: carácter | salida: boolean
    return caracter.toLowerCase() !== caracter.toUpperCase(); // true si es letra
};

const dominioValido = (dominio) => {                         // entrada: string | salida: boolean
    const ultimoPunto = dominio.lastIndexOf(".");            // último punto del dominio
    const extension = dominio.slice(ultimoPunto + 1);        // extensión (.es, .com…)
    const longitudOk = extension.length >= 2;                // al menos 2 letras
    const soloLetras = [...extension].every(esLetra);        // extensión solo con letras
    return ultimoPunto > 0 && longitudOk && soloLetras;      // true si dominio válido
};

const miFuncion = (texto) => {                               // entrada: email | salida: boolean
    const limpio = normalizarTexto(texto);                   // recibe parámetro, devuelve vía pasos
    const unaArroba = tieneUnaSolaArroba(limpio);            // pasa limpio como parámetro
    const [local, dominio] = obtenerPartes(limpio);        // recibe resultado en variable
    const localOk = local.length > 0;                        // comprueba parte local
    const dominioOk = dominioValido(dominio);                // pasa dominio como parámetro
    return unaArroba && localOk && dominioOk;                // devuelve el resultado final
};

const mensajeValidacion = (esValido) => {                    // entrada: boolean | salida: string
    return esValido ? "verdadero" : "falso";                 // devuelve texto para pantalla
};

// FUNCIÓN PRINCIPAL (única que toca el DOM)

const funcionPrincipal = (evento) => {                       // entrada: event | salida: ninguna
    evento.preventDefault();                                 // evita recargar la página

    const emailEscrito = inputEmail.value;                   // main LEE del DOM
    const esValido = miFuncion(emailEscrito);               // main PASA dato → RECIBE resultado
    const mensaje = mensajeValidacion(esValido);            // main PASA boolean → RECIBE string
    zonaResultado.textContent = mensaje;                   // main MUESTRA en pantalla
};


// EJECUCIÓN DE CÓDIGO

formulario.addEventListener("submit", funcionPrincipal);     // al enviar, ejecuta la main