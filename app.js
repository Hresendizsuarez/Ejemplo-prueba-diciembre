//Lectura Datos
let fs = require("fs");
let moment = require("moment");

//Traer Datos
let datosJ = require('./documento/datos.json');
let {leerDatos, listarTareas, guardarTarea, eliminarTarea} = require('./funciones/tareas.js');

let guardar = {
    "codigo": 6,
    "titulo": "recemara2",
    "estado": "final"
}



//Imprimir Datos
//listarTareas(datosJ);
//guardarTarea(datosJ,guardar);
//eliminarTarea(datosJ,6);
leerDatos(datosJ);



