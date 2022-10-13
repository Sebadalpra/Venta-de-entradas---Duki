const parrafo = document.getElementById("etiquetaP");
let btn = document.querySelectorAll("button");

const entradas = [
	{ id: 1, nombre: "CAMPO VIP", precio: 8000, capacidad: 2000 },
	{ id: 2, nombre: "CAMPO GENERAL", precio: 5000, capacidad: 10000 },
	{ id: 3, nombre: "PLATEA NORTE", precio: 3000, capacidad: 5000 },
	{
		id: 4,
		nombre: "PLATEA SUR",
		precio: 3000,
		capacidad: 5000,
	},
];

console.log(entradas[3].cords);
/* CARRITO */
let carrito = document.querySelector("#carrito");
carrito = [];

function areaVIP() {
	parrafo.innerHTML = `Usted ha elegido ${entradas[0].nombre}, su precio es de $${entradas[0].precio}`;
}
function areaGeneral() {
	carrito.push(
		(parrafo.innerHTML = `Usted ha elegido ${entradas[1].nombre}, su precio es de $${entradas[1].precio}`)
	);
}
function btnNorte() {
	carrito.push(
		(parrafo.innerHTML = `Usted ha elegido ${entradas[2].nombre}, su precio es de $${entradas[2].precio}`)
	);
}
function btnSur() {
	carrito.push(
		(parrafo.innerHTML = `Usted ha elegido ${entradas[3].nombre}, su precio es de $${entradas[3].precio}`)
	);
}

carrito.innerHTML = "";

console.log(carrito);
