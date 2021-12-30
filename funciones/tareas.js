let fs = require('fs')

function leerDatos(datos){
    datos.forEach(function(elemento){
        console.log(elemento)
    });
}

function listarTareas(tareas){
    tareas.forEach(function(elemento){
        console.log(elemento.titulo)
    });
}

function guardarTarea(array, guardar){
    array.push(guardar)
    fs.writeFileSync('./documento/datos.json', JSON.stringify(array, null, " "));
}



module.exports = {leerDatos, listarTareas, guardarTarea};