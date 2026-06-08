// DECLARACIÓN DE VARIABLES

const formulario = document.getElementById("formNumeros");      // enlace con el formulario
const inputNumeros = document.getElementById("numeros");        // enlace con el campo de texto
const zonaResultado = document.getElementById("resultado");     // enlace con la zona del mensaje


// DECLARACIÓN DE FUNCIONES

const separarPorComas = (texto) => {                           // entrada: string | salida: array
    return texto.split(",");                                   // parte el texto por comas
};

const limpiarParte = (parte) => {                              // entrada: string | salida: string
    return parte.trim();                                       // quita espacios al borde
};

const parteANumero = (parte) => {                              // entrada: string | salida: number
    return Number(parte);                                      // convierte el trozo a número
};

const textoAArray = (texto) => {                               // entrada: string | salida: array
    const partes = separarPorComas(texto).map(limpiarParte);   // separa y limpia cada trozo
    const numeros = partes.filter((p) => p.length > 0).map(parteANumero); // quita vacíos y convierte
    return numeros;                                            // devuelve array de números
};

const esEntero = (numero) => {                                 // entrada: number | salida: boolean
    return Number.isInteger(numero);                           // true si no tiene decimales
};

const arrayValido = (valores) => {                             // entrada: array | salida: boolean
    const tieneElementos = valores.length > 0;                 // comprueba que no esté vacío
    const todosSonNumeros = valores.every((n) => !Number.isNaN(n)); // comprueba que no haya NaN
    const todosSonEnteros = valores.every(esEntero);           // rechaza 1.4 (punto decimal)
    return tieneElementos && todosSonNumeros && todosSonEnteros; // true si el array es usable
};

const encontrarMaximo = (numeros) => {                         // entrada: array | salida: number
    let maximo = numeros[0];                                   // empieza con el primer número
    for (const numero of numeros) {                            // recorre cada elemento
        if (numero > maximo) maximo = numero;                  // guarda si es mayor
    }
    return maximo;                                             // devuelve el más alto
};

const encontrarMinimo = (numeros) => {                         // entrada: array | salida: number
    let minimo = numeros[0];                                   // empieza con el primer número
    for (const numero of numeros) {                            // recorre cada elemento
        if (numero < minimo) minimo = numero;                  // guarda si es menor
    }
    return minimo;                                             // devuelve el más bajo
};

const miFuncion = (array) => {                                 // entrada: array | salida: array
    const maximo = encontrarMaximo(array);                     // pide el más alto
    const minimo = encontrarMinimo(array);                     // pide el más bajo
    return [maximo, minimo];                                   // devuelve [max, min]
};

const formatearArray = (valores) => {                          // entrada: array | salida: string
    return `[${valores.join(", ")}]`;                          // texto legible para pantalla
};

const mensajeResultado = (esValido, extremos) => {             // entrada: boolean + array | salida: string
    const mensajeError = "Usa comas entre enteros, no puntos (ej: 1, 4, 5)."; // texto si falla
    const mensajeOk = formatearArray(extremos);                // texto si todo va bien
    return esValido ? mensajeOk : mensajeError;                // elige un mensaje u otro
};

// FUNCIÓN PRINCIPAL (única que toca el DOM)

const funcionPrincipal = (evento) => {                         // entrada: event | salida: ninguna
    evento.preventDefault();                                   // evita recargar la página

    const textoEscrito = inputNumeros.value;                   // lee el texto del input
    const valores = textoAArray(textoEscrito);                 // convierte texto → array
    const esValido = arrayValido(valores);                     // valida el array
    const extremos = esValido ? miFuncion(valores) : [];       // calcula [max, min] si es válido
    const mensaje = mensajeResultado(esValido, extremos);      // prepara el mensaje
    zonaResultado.textContent = mensaje;                       // muestra en pantalla
};


// EJECUCIÓN DE CÓDIGO

formulario.addEventListener("submit", funcionPrincipal);       // al enviar, ejecuta la principal
