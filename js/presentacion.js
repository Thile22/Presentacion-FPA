
// =====================================
// ELEMENTOS DE LA PRESENTACIÓN
// =====================================

const diapositivas = document.querySelectorAll(".diapositiva");

const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

const contador = document.getElementById("contador");

// Diapositiva que se encuentra visible
let diapositivaActual = 0;


// =====================================
// MOSTRAR DIAPOSITIVA
// =====================================

function mostrarDiapositiva(indice) {

    // Ocultar todas las diapositivas
    diapositivas.forEach((diapositiva) => {
        diapositiva.classList.remove("activa");
    });

    // Mostrar la diapositiva seleccionada
    diapositivas[indice].classList.add("activa");

    // Actualizar contador
    const actual = String(indice + 1).padStart(2, "0");
    const total = String(diapositivas.length).padStart(2, "0");

    contador.textContent = `${actual} / ${total}`;
}


// =====================================
// SIGUIENTE DIAPOSITIVA
// =====================================

botonSiguiente.addEventListener("click", () => {

    if (diapositivaActual < diapositivas.length - 1) {

        diapositivaActual++;

        mostrarDiapositiva(diapositivaActual);

    }

});


// =====================================
// DIAPOSITIVA ANTERIOR
// =====================================

botonAnterior.addEventListener("click", () => {

    if (diapositivaActual > 0) {

        diapositivaActual--;

        mostrarDiapositiva(diapositivaActual);

    }

});


// =====================================
// NAVEGACIÓN CON TECLADO
// =====================================

document.addEventListener("keydown", (evento) => {

    if (evento.key === "ArrowRight") {

        botonSiguiente.click();

    }

    if (evento.key === "ArrowLeft") {

        botonAnterior.click();

    }

});


// =====================================
// INICIAR PRESENTACIÓN
// =====================================

mostrarDiapositiva(diapositivaActual);
