// DECLARACIÓN DE VARIABLES
// Enlaces con el HTML (no son independientes: dependen de los id de ESTA página)
const inputFrase = document.getElementById("frase");                 // enlace HTML: input de la frase
const btnInvertir = document.getElementById("btnCalcular");          // enlace HTML: botón Invertir
const parrafoResultado = document.getElementById("resultado");       // enlace HTML: zona de salida

// DECLARACIÓN DE FUNCIONES

// — BIBLIOTECA: independientes 100 % (solo datos, con return; copiar sin cambiar) —
// Prueba del profe: miFuncion("Hola Mundo") → "odnuM aloH" sin document ni getElementById

const invertirPalabra = (palabra) => {                               // entrada: palabra (string) | salida: string
    return palabra.split("").reverse().join("");                       // invierte letras; ej. "Mundo" → "odnuM"
};

const miFuncion = (cadena) => {                                      // entrada: cadena (string) | salida: string
    const palabras = cadena.trim().split(" ");                      // separa la frase en palabras
    const invertidas = palabras.map(invertirPalabra);               // invierte cada palabra
    return invertidas.reverse().join(" ");                           // invierte orden de palabras; ej. "odnuM aloH"
};

// — AYUDANTES: reutilizables (copiar igual; en otra página pasas otro input u otro elemento) —
// No son 100 % independientes: usan DOM (.value, .textContent), pero no usan getElementById dentro

const leerTexto = (input) => {                                       // entrada: input (elemento HTML) | salida: string
    return input.value.trim();                                       // lee lo que escribió el usuario
};

const mostrarTexto = (elemento, texto) => {                          // entrada: elemento + texto (string) | salida: ninguna
    elemento.textContent = texto;                                    // escribe en pantalla (sin return)
};

// — MAIN (pizarra: Lee → validación → llama función pertinente → escribe en HTML) —
// No es 100 % independiente: en otro ejercicio cambias miFuncion por otra (ej. cuentaCaracteres)

const funcionMain = (input, elementoResultado) => {                    // entrada: 2 elementos HTML | salida: ninguna
    const texto = leerTexto(input);                                  // 1. Lee

    if (texto === "") {                                              // 2. Validación JS
        mostrarTexto(elementoResultado, "Escribe una frase");
        return;
    }

    const resultado = miFuncion(texto);                              // 3. Llama función pertinente → 4. Recibe respuesta
    mostrarTexto(elementoResultado, resultado);                      // 5. Escribe en HTML
};

// EJECUCIÓN DE CÓDIGO
// Listener: conecta botón con main (cambia en cada página: otro id, otro evento)

btnInvertir.addEventListener("click", () => {                        // entrada: evento click | salida: ninguna
    funcionMain(inputFrase, parrafoResultado);                         // pasa los elementos de ESTA app
});