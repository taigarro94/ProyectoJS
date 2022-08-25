class Equipo {
    constructor(nombre, partidosJugados, puntos, ciudad) {
        this.nombre = nombre;
        this.partidosJugados = partidosJugados;
        this.puntos = puntos;
        this.ciudad = ciudad;
    }
}

const equipos=[
    {
        nombre:"Las Leñitas FC",
        partidosJugados: 4,
        puntos:5,
        ciudad:"La Granja"
    },
    {
        nombre:"Caroya Unido",
        partidosJugados:4,
        puntos:3,
        ciudad:"Colonia Caroya"
    },     
];

dibujarTabla();

let formulario1 = document.getElementById("agregarForm");
let agregarUnEquipo = document.getElementById("agregarEq");
let agregarPartidosJugados = document.getElementById("agregarPj");
let agregarPuntos = document.getElementById("agregarPts");
let agregarCiudad = document.getElementById("agregarCity");

agregarUnEquipo.onchange = () => {
    agregarEq = agregarUnEquipo.value;
}
agregarPartidosJugados.onchange = () => {
    agregarPj = agregarPartidosJugados.value;
}
agregarPuntos.onchange = () => {
    agregarPts = agregarPuntos.value;
}
agregarCiudad.onchange = () => {
    agregarCity = agregarCiudad.value;
}

function cargarUnEquipo() {
    equipos.push(new Equipo(agregarEq, agregarPj, agregarPts, agregarCity));
}

let botonDeAgregar = document.getElementById("addEquipo");

botonDeAgregar.onclick = () => {
    if ((agregarUnEquipo.value == "") || (agregarPartidosJugados.value == "") || (agregarPuntos.value == "") || (agregarCiudad.value == "")) {
        alert("Por favor, complete todos los campos")
    } else {
        cargarUnEquipo();
        console.log("Has agregado un equipo");
        dibujarTabla();
        console.table(equipos);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Equipo Agregado con Éxito',
            showConfirmButton: false,
            timer: 1500
          })
    }
    localStorage.setItem("equipos",JSON.stringify(equipos));
}

let traidoDelStorage=localStorage.getItem("equipos");
const jsonAObjeto=JSON.parse(traidoDelStorage);
console.log(jsonAObjeto);


function dibujarTabla() {
    let tablaDePosicion = document.getElementById("equipoItem");
    tablaDePosicion.innerHTML = "";
    equipos.forEach(
        (equipo) => {
            tablaDePosicion.innerHTML += `
            <tr>
            <td id="equipo-nombre-${equipo.nombre}">${equipo.nombre}</td>
            <td id="equipo-pj-${equipo.partidosJugados}">${equipo.partidosJugados}</td>
            <td id="equipo-pts-${equipo.puntos}">${equipo.puntos}</td>
            <td id="equipo-ciudad-${equipo.ciudad}">${equipo.ciudad}</td>
            </tr>
        `;
        }
    );
}


let botonDeEliminar = document.getElementById("eliminarEqui");


let formularioEliminar = document.getElementById("eliminarForm");
let paraEliminarNombre = document.getElementById("eliminarNombre");
let paraEliminarCiudad = document.getElementById("eliminarCiudad");

paraEliminarNombre.onchange = () => {
    eliminarNombre = paraEliminarNombre.value;
}
paraEliminarCiudad.onchange = () => {
    eliminarCiudad = paraEliminarCiudad.value;
}

botonDeEliminar.onclick = () => {
    if ((paraEliminarNombre.value == "") || (paraEliminarCiudad.value == "")) {
        alert("Por favor, complete todo los campos")
    } else
        equiposRestantes = equipos.filter(equipo => equipo.nombre != paraEliminarNombre.value);
    equipos.length = 0;
    equiposRestantes.forEach((equiposRestantes) => equipos.push(equiposRestantes));
    dibujarTabla();
}