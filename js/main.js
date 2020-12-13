'use strict';

const crearHead = (claves) => {
    let theadEl = document.createElement('thead');
    let trEl = document.createElement('tr');
    for (let i = 0; i < claves.length; i++) {
        let thEl = document.createElement('th');
        thEl.innerHTML = claves[i];
        trEl.appendChild(thEl);
    }
    for (let i = 0; i < 1; i++) {
        let th = document.createElement('th')
        th.innerText = "Opciones"
        trEl.appendChild(th)
    }
    theadEl.appendChild(trEl);
    tablaEl.appendChild(theadEl);
    tablaEl.setAttribute('class', 'table table-dark');
}

const crearFila = (elemento) => {
    let fila = document.createElement('tr');

    for (let clave in elemento) {
        let columna = document.createElement('td');
        columna.innerText = elemento[clave];
        fila.appendChild(columna);
    }
    for (let i = 0; i < 1; i++) {
        let columna = document.createElement('td');

        let btnEditar = document.createElement('button');
        btnEditar.innerText = "Editar";
        btnEditar.setAttribute('class', 'btn btn-warning');
        btnEditar.setAttribute('data-toggle', 'modal');
        btnEditar.setAttribute('data-target', '#modalEditar');

        let btnEliminar = document.createElement('button');
        btnEliminar.innerText = "Eliminar";
        btnEliminar.setAttribute('class', 'btn btn-danger');
        btnEliminar.setAttribute('data-toggle', 'modal');
        btnEliminar.setAttribute('data-target', '#modalEliminar');

        columna.appendChild(btnEditar);
        fila.appendChild(columna);
        columna.appendChild(btnEliminar);
        fila.appendChild(columna);

        btnEliminar.addEventListener('click', () => {
            event.target.parentNode.parentNode.remove();
        });

        btnModalAceptarEditar.addEventListener('click', () => {
            setTimeout(() => {
                editarDatos();
            }, 2000);
            cargarBarra();
        });
    }
    return fila;
}

const crearBody = (elementos) => {
    let tbody = document.createElement('tbody');
    for (let i = 0; i < elementos.length; i++) {
        tbody.appendChild(crearFila(elementos[i]));
    }
    tablaEl.appendChild(tbody);
}

const agregarFila = () => {
    if (inputModalPuesto.value !== '' && inputModalLenguaje.value !== '' && inputModalAño.value !== '') {

        let newFila = tablaEl.insertRow(tablaEl.rows.length);
        let celdaPuesto = newFila.insertCell(0);
        let celdaNombre = newFila.insertCell(1);
        let celdaAño = newFila.insertCell(2);
        let celdaBoton = newFila.insertCell(3);

        celdaPuesto.innerHTML = inputModalPuesto.value;
        celdaNombre.innerHTML = inputModalLenguaje.value;
        celdaAño.innerHTML = inputModalAño.value;

        datos.push({
            Puesto: inputModalPuesto.value,
            Nombre: inputModalLenguaje.value,
            Año: inputModalAño.value
        })
        console.log(datos);

        filtrarDatos(datos);

        let btnEditar = document.createElement('button');
        btnEditar.innerText = "Editar";
        btnEditar.setAttribute('class', 'btn btn-warning');
        btnEditar.setAttribute('data-toggle', 'modal');
        btnEditar.setAttribute('data-target', '#modalEditar');
        celdaBoton.appendChild(btnEditar);

        let btnEliminar = document.createElement('button');
        btnEliminar.innerText = "Eliminar";
        btnEliminar.setAttribute('class', 'btn btn-danger');
        btnEliminar.setAttribute('data-toggle', 'modal');
        btnEliminar.setAttribute('data-target', '#modalEliminar');
        celdaBoton.appendChild(btnEliminar);

        btnEliminar.addEventListener('click', () => {
            event.target.parentNode.parentNode.remove();
        });

        btnModalAceptarEditar.addEventListener('click', () => {
            setTimeout(() => {
                editarDatos();
            }, 2000);
            cargarBarra();
        });
    }
}

const limpiarInput = () => {
    inputModalPuesto.value = '';
    inputModalLenguaje.value = '';
    inputModalAño.value = '';
}

const cargarBarra = () => {
    let progress = 25;
    let time = setInterval(clock, 25)
    function clock() {
        if (progress >= 100) {
            clearInterval(time);
            barraEl.classList.add('display-none');
        } else {
            progress++;
            barraEl.style.width = progress + '%';
            barraEl.innerHTML = progress * 1 + '%';
            barraEl.classList.remove('display-none');
        }
    }
}

const filtrarDatos = () => {
    let datoFiltrado = datos.filter(function (el) {
        return el.Año >= 2000;
    })
    console.log(datoFiltrado);
}

const check = () => {
    cheackbox = document.getElementById('filtrarNuevos');
    if (cheackbox.checked == true) {
        let datoFiltrado = datos.filter(function (el) {
            return el.Año >= 2000;
        })
        console.log(datoFiltrado);
        tablaEl.innerHTML = '';
        crearHead(keysLenguajes);
        crearBody(datoFiltrado);
    } else if (cheackbox.checked == false) {
        tablaEl.innerHTML = '';
        crearHead(keysLenguajes);
        crearBody(datos);
    }
}

let filaIndex;
btnEditar.addEventListener('click', () => {
    for (let i = 1; i < tablaEl.rows.length; i++) {
        tablaEl.rows[i].onclick = function () {
            filaIndex = this.rowIndex;
            console.log(filaIndex);
            inputModalPuestoEditar.value = this.cells[0].innerHTML;
            inputModalLenguajeEditar.value = this.cells[1].innerHTML;
            inputModalAñoEditar.value = this.cells[2].innerHTML;
        }
    }
});

const editarDatos = () => {
    tablaEl.rows[filaIndex].cells[0].innerHTML = inputModalPuestoEditar.value;
    tablaEl.rows[filaIndex].cells[1].innerHTML = inputModalLenguajeEditar.value;
    tablaEl.rows[filaIndex].cells[2].innerHTML = inputModalAñoEditar.value;
}
