'use strict';

let tablaEl = document.getElementById('tabla');
let btnAgregar = document.getElementById('botonAgregar');
let inputModalPuesto = document.getElementById('inputModalPuesto');
let inputModalLenguaje = document.getElementById('inputModalLenguaje');
let inputModalAño = document.getElementById('inputModalAño');
let barraEl = document.getElementById('barra');
let btnModalAceptar = document.getElementById('modalAceptar');
let btnCancelar = document.getElementById('cancelar');
let cheackbox = document.getElementById('filtrarNuevos');
let btnEditar = document.getElementById('modalEditar');
let btnModalAceptarEditar = document.getElementById('modalAceptarEditar');
let inputModalPuestoEditar = document.getElementById('inputModalPuestoEditar');
let inputModalLenguajeEditar = document.getElementById('inputModalLenguajeEditar');
let inputModalAñoEditar = document.getElementById('inputModalAñoEditar');

const datos = [
    { Puesto: '1', Nombre: 'Java', Año: '1990' },
    { Puesto: '2', Nombre: 'C', Año: '1972' },
    { Puesto: '3', Nombre: 'Python', Año: '1991' },
    { Puesto: '4', Nombre: 'C++', Año: '1983' },
    { Puesto: '5', Nombre: 'C#', Año: '2000' },
    { Puesto: '6', Nombre: 'JavaScript', Año: '1995' },
    { Puesto: '7', Nombre: 'PHP', Año: '1994' },
    { Puesto: '8', Nombre: 'Swift', Año: '2014' },
    { Puesto: '9', Nombre: 'SQL', Año: '1974' },
    { Puesto: '10', Nombre: 'Ruby', Año: '1995' },
    { Puesto: '11', Nombre: 'Objective C', Año: '1983' },
    { Puesto: '12', Nombre: 'R', Año: '1993' },
    { Puesto: '13', Nombre: 'Matlab', Año: '1970' },
    { Puesto: '14', Nombre: 'Elixir', Año: '2012' },
    { Puesto: '15', Nombre: 'Go', Año: '2009' }
];

let keysLenguajes = Object.keys(datos[0]);
