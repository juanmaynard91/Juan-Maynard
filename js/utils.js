'use strict';

window.addEventListener("load", () => {
    crearHead(keysLenguajes);
    crearBody(datos);
});

btnCancelar.addEventListener('click', () => {
    limpiarInput();
});

btnModalAceptar.addEventListener('click', () => {
    setTimeout(() => {
        agregarFila();
        limpiarInput();
    }, 2000);
    cargarBarra();
});

cheackbox.addEventListener('click', () => {
    check();
});
