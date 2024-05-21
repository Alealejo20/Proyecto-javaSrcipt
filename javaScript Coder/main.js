alert("¡Bienvenido!");

Producto = function (nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

let producto1 = new Producto("Coca", 2000, 50);
let producto2 = new Producto("Arroz", 1200, 30);
let producto3 = new Producto("Pan", 1600, 30);
let lista = [producto1, producto2, producto3];


console.table(lista);

function filtrarProducto() {
    let palabraBuscar = prompt("¿Qué desea buscar?").toLowerCase().trim();
    let resultado = lista.filter((x) => x.nombre.toLowerCase().includes(palabraBuscar));

    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        alert("No hay ninguna coincidencia con: " + palabraBuscar);
    }
}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto").toLowerCase().trim();
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    let stock = parseInt(prompt("Ingrese el stock del producto"));

    if (isNaN(precio) || isNaN(stock) || nombre === "") {
        alert("Ingrese correctamente los datos");
        return;
    }

    let producto = new Producto(nombre, precio, stock);

    if (lista.some((x) => x.nombre === producto.nombre)) {
        alert("Ya está ingresado ese producto");
        return;
    }

    lista.push(producto);
    console.table(lista);
}

let opcion = prompt("Elija una opción: \n1. Buscar producto \n2. Agregar producto");

if (opcion === "1") {
    filtrarProducto();
} else if (opcion === "2") {
    agregarProducto();
} else {
    alert("Opción no válida");
}


