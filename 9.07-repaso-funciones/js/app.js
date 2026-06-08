// ——— 1. DECLARACIÓN DE VARIABLES ———

const formPalindromo = document.getElementById("formPalindromo"); // enlace HTML: formulario | sin entrada | referencia al <form>
const inputTexto = document.getElementById("texto"); // enlace HTML: input | sin entrada | referencia al campo de texto
const divResultado = document.getElementById("resultado"); // enlace HTML: div | sin entrada | referencia donde se muestra el resultado

// ——— 2. DECLARACIÓN DE FUNCIONES ———

// biblioteca (reutilizable en otros ejercicios)

// Prepara el texto para comparar palíndromos: ignora mayúsculas y espacios (ej: "Ana" y "a n a" se tratan igual)
const normalizarTexto = (texto) => { // entrada: string | salida: string
    return texto.toLowerCase().replace(/\s/g, "");
};

const invertirTexto = (texto) => { // entrada: string | salida: string | devuelve el texto al revés
    return texto.split("").reverse().join("");
};

const mifuncion = (texto) => { // entrada: string | salida: boolean | true si es palíndromo (ej: mifuncion("Salas") → true)
    const limpio = normalizarTexto(texto);
    const alReves = invertirTexto(limpio);
    return limpio === alReves;
};

const mostrarEnPantalla = (elemento, valor) => { // entrada: nodo DOM, boolean | salida: ninguna | muestra true o false en el div
    elemento.textContent = valor;
};

// función principal (solo coordina este ejercicio)

const funcionMain = (evento) => { // entrada: evento submit | salida: ninguna | al enviar: lee el texto, comprueba con mifuncion y muestra true o false
    evento.preventDefault(); // evita que la página se recargue al enviar el formulario
    const texto = inputTexto.value.trim(); // lee la palabra o frase del input y quita espacios al inicio y al final
    const resultado = mifuncion(texto); // devuelve true si es palíndromo, false si no (como el enunciado)
    mostrarEnPantalla(divResultado, resultado); // escribe true o false en el div #resultado
};

// ——— 3. EJECUCIÓN DE CÓDIGO ———

formPalindromo.addEventListener("submit", funcionMain); // evento: submit | ejecuta funcionMain al enviar el formulario