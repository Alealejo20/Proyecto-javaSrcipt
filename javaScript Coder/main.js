document.addEventListener('DOMContentLoaded', () => {
    alert("¡Bienvenido!");

    const entradaNombre = document.getElementById('entradaNombre');
    const botonGuardarNombre = document.getElementById('botonGuardarNombre');
    const seccionNombre = document.getElementById('seccionNombre');
    const seccionProductos = document.getElementById('seccionProductos');
    const nombreUsuarioSpan = document.getElementById('nombreUsuario');
    const botonBuscarProducto = document.getElementById('botonBuscarProducto');
    const botonAgregarProducto = document.getElementById('botonAgregarProducto');
    const listaProductos = document.getElementById('listaProductos');

    class Producto {
        constructor(nombre, precio, stock) {
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock;
        }
    }

    const productosIniciales = [
        new Producto("Coca", 2000, 50),
        new Producto("Arroz", 1200, 30),
        new Producto("Pan", 1600, 30)
    ];

    let lista = JSON.parse(localStorage.getItem('productos')) || productosIniciales;

    function guardarProductos() {
        localStorage.setItem('productos', JSON.stringify(lista));
    }

    function renderizarProductos(productos = lista) {
        listaProductos.innerHTML = '';

        productos.forEach((producto) => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock}`;
            listaProductos.appendChild(li);
        });
    }

    function filtrarProducto() {
        const palabraBuscar = prompt("¿Qué desea buscar?").toLowerCase().trim();
        const resultado = lista.filter((x) => x.nombre.toLowerCase().includes(palabraBuscar));

        if (resultado.length > 0) {
            renderizarProductos(resultado);
        } else {
            alert("No hay ninguna coincidencia con: " + palabraBuscar);
        }
    }

    function agregarProducto() {
        const nombre = prompt("Ingrese el nombre del producto").toLowerCase().trim();
        const precio = parseFloat(prompt("Ingrese el precio del producto"));
        const stock = parseInt(prompt("Ingrese el stock del producto"));

        if (isNaN(precio) || isNaN(stock) || nombre === "") {
            alert("Ingrese correctamente los datos");
            return;
        }

        const producto = new Producto(nombre, precio, stock);

        if (lista.some((x) => x.nombre === producto.nombre)) {
            alert("Ya está ingresado ese producto");
            return;
        }

        lista.push(producto);
        guardarProductos();
        renderizarProductos();
    }

    botonGuardarNombre.addEventListener('click', () => {
        const nombreUsuario = entradaNombre.value.trim();
        if (nombreUsuario) {
            localStorage.setItem('nombre', nombreUsuario);
            seccionNombre.style.display = 'none';
            seccionProductos.style.display = 'block';
            nombreUsuarioSpan.textContent = nombreUsuario;
        }
    });

    botonBuscarProducto.addEventListener('click', filtrarProducto);
    botonAgregarProducto.addEventListener('click', agregarProducto);

    const nombre = localStorage.getItem('nombre');
    if (nombre) {
        seccionNombre.style.display = 'none';
        seccionProductos.style.display = 'block';
        nombreUsuarioSpan.textContent = nombre;
    }

    renderizarProductos();
});
