// DECLARACIÓN DE VARIABLES

const formPromedio = document.getElementById("formPromedio");
const inputNumeros = document.getElementById("numeros");
const divResultado = document.getElementById("resultado");


// DECLARACIÓN DE FUNCIONES

const textoAListaNumeros = (texto) => {                  // entrada: string | salida: number[]
    const partes = texto.split(",");                     // separa por comas lo que escribió el usuario
    const numeros = [];
    for (const parte of partes) {
        const limpio = parte.trim();
        if (limpio !== "") {
            numeros.push(Number(limpio));
        }
    }
    return numeros;                                      // devuelve el arreglo listo para pasarlo a promedio
};

const esListaValida = (numeros) => {                     // entrada: number[] | salida: boolean
    if (numeros.length === 0) return false;              // valida que haya al menos un número
    for (const numero of numeros) {
        if (Number.isNaN(numero)) return false;            // valida que todos sean números reales
    }
    return true;
};

const promedio = (numeros) => {                          // entrada: number[] por parámetro | salida: number con return
    let suma = 0;
    for (const numero of numeros) {
        suma += numero;
    }
    return suma / numeros.length;                        // devuelve el promedio (ej: [9,8,...,0] → 4.5)
};

const funcionMain = (event) => {                         // entrada: Event | salida: ninguna (solo muestra en pantalla)
    event.preventDefault();

    const texto = inputNumeros.value;                    // 1. lee los datos del formulario
    const lista = textoAListaNumeros(texto);             // prepara el arreglo para pasarlo por parámetro

    if (!esListaValida(lista)) {                         // 2. valida antes de llamar a promedio
        divResultado.textContent = "Escribe números válidos separados por comas";
        return;
    }

    const resultado = promedio(lista);                     // 3. pasa el arreglo por parámetro y recibe el return
    divResultado.textContent = `Promedio: ${resultado}`; // 4. muestra el resultado cuando main ya lo tiene
};


// EJECUCIÓN DE CÓDIGO

formPromedio.addEventListener("submit", funcionMain);
