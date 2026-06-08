// ——— 1. DECLARACIÓN DE VARIABLES ———

const inputTexto = document.getElementById("texto");
const inputPatron = document.getElementById("patron");
const btnLimpiar = document.getElementById("btnLimpiar");
const zonaAviso = document.getElementById("aviso");
const zonaResultado = document.getElementById("resultado");


// ——— 2. DECLARACIÓN DE FUNCIONES ———

const eliminarPatron = (texto, patron) => {                         // entrada: string, string | salida: string
    return texto.split(patron).join("");                           // texto sin el patrón (biblioteca)
};

const obtenerTextoLimpio = (texto, patron) => {                    // entrada: string, string | salida: { ok, resultado?, mensaje? }
    const t = texto.trim();
    if (!t || !patron) {
        return { ok: false, mensaje: "Rellena el texto y el patrón." };
    }
    return { ok: true, resultado: eliminarPatron(t, patron) };
};

const pintarAviso = (zona, mensaje) => {                         // entrada: nodo, string | salida: —
    zona.textContent = mensaje;
    zona.classList.remove("hidden");
};

const ocultarAviso = (zona) => {                                 // entrada: nodo | salida: —
    zona.classList.add("hidden");
};

const pintarResultado = (zona, texto) => {                       // entrada: nodo, string | salida: —
    zona.innerHTML = `<p class="text-center text-lg font-bold">${texto}</p>`;
};

const funcionMain = (inputTexto, inputPatron, zonaAviso, zonaResultado) => {  // entrada: 4 nodos | salida: — (función principal)
    const datos = obtenerTextoLimpio(inputTexto.value, inputPatron.value);

    if (!datos.ok) {
        pintarAviso(zonaAviso, datos.mensaje);
        return;
    }

    ocultarAviso(zonaAviso);
    pintarResultado(zonaResultado, datos.resultado);
};


// ——— 3. EJECUCIÓN DE CÓDIGO ———

btnLimpiar.addEventListener("click", () => {                       // click → funcionMain
    funcionMain(inputTexto, inputPatron, zonaAviso, zonaResultado);
});