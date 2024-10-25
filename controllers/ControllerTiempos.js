import { tiempos } from "../models/ModelTiempos.js"
export function registrarTiempos() {
    let fecha = document.getElementById("fecha").value
    let tiempo = document.getElementById("tiempo").value
    let proyecto = document.getElementById("proyecto").value

    let newRegistro = {
        fecha: fecha,
        tiempo: tiempo,
        proyecto: proyecto
    }
    tiempos.push(newRegistro)
    console.log(tiempos)
    crearRegistroTiempo(newRegistro)
}
function crearRegistroTiempo(newRegistro){
let registro =(document.createElement("tr"))
let fecha =(document.createElement("td"))
let tiempo = (document.createElement("td"))
let proyectos =(document.createElement("td"))
let acciones = (document.createElement("td"))
let editar = (document.createElement("button"))
let eliminar = (document.createElement("button"))
fecha.textContent = newRegistro.fecha
tiempo.textContent = newRegistro.tiempo
proyectos.textContent = newRegistro.proyecto
editar.textContent = "Editar"
eliminar.textContent = "Eliminar"
acciones.classList.add("botones")
acciones.append(editar, eliminar)
registro.append(fecha, tiempo, proyectos, acciones)
console.log(registro)
document.getElementById("registros").append(registro)
}
