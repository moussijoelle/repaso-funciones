const enteroAleatorioInclusive = (min, max) => {              // entero al azar entre min y max (ambos incluidos)
    min = Math.ceil(min);                                     // convierte min en entero hacia arriba
    max = Math.floor(max);                                    // convierte max en entero hacia abajo
    return Math.floor(Math.random() * (max - min + 1) + min); // fórmula: número entre 0 y 1 → rango min–max
};

const mostrarTexto = (elemento, texto) => {                     // escribe texto dentro de un elemento del HTML
    elemento.textContent = texto;                             // asigna el texto al nodo del DOM
};

const alEnviarFormulario = (formulario, accion) => {          // cuando se envía el formulario, ejecuta accion
    formulario.addEventListener("submit", (evento) => {       // escucha el evento submit
        evento.preventDefault();                              // evita que la página se recargue
        accion();                                             // llama a la función que le pasamos
    });
};

const mostrarAleatorioEnElemento = (elemento, min, max, prefijo) => {  // genera un aleatorio y lo muestra con un texto delante
    const numero = enteroAleatorioInclusive(min, max);        // obtiene el número aleatorio
    mostrarTexto(elemento, `${prefijo}${numero}`);            // lo enseña en pantalla
};

export { enteroAleatorioInclusive, mostrarTexto, alEnviarFormulario, mostrarAleatorioEnElemento };  // deja usar estas funciones en app.js con import
