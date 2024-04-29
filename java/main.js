let intentos = 0
let maxIntentos = 5
let b = 1.21
let g = 1.50

do {
    let nombre = prompt("Hola, ingrese su nombre!");
    if (nombre === "alejo") {
        alert("¡Hola, " + nombre + "! Bienvenido.");

        let empresa = prompt("Que empresa es la que desea sacar el precio ?")


        switch (empresa) {
            case "Arcor":
                nombreEmpresa = "Arcor"
                console.log("Se debe agregar el iva mas la ganancia!");
                break;
            case "Milkaut":
                nombreEmpresa = "Milkaut"
                console.log("Se debe agregar solamente la ganancia!");
                break;
            case "Redolfi":
                nombreEmpresa = "Redolfi"
                console.log("se debe agregar el iva y la ganancia!");
                break;
            default:
                console.log("empresa no cargada o desconocida!")
        }

        let valorProducto = parseFloat(prompt("Ingrese el valor del prodcuto"))

        if (empresa == "Arcor") {
            let total = calcularTodo(valorProducto, 1.21, 1.50)
            alert("el valor del procuto es " + total + " " + "Muchas gracias!")
        } else if (empresa == "Milkaut") {
            let total = calcularIva(valorProducto, 1.21)
            alert("el valor del producto es" + total + " " + "muchas gracias")
        } else if (empresa == "Redolfi") {
            let total = calcularTodo(valorProducto, 1.21, 1.45)
            alert("el valor del procuto es " + total + " " + "Muchas gracias!")
        }
        break;
    } else {
        intentos++;
        if (intentos >= maxIntentos) {
            alert("Has excedido el número máximo de intentos. Lo siento, no podemos continuar.");
            break;
        } else {
            alert("Por favor, ingresa un nombre válido. Te quedan " + (maxIntentos - intentos) + " intentos.");
        }
    }
} while (intentos < maxIntentos);


function calcularTodo(valorProducto, b, g) {
    let precioConIva = valorProducto * b;
    let precioFinal = precioConIva * g;
    return precioFinal;
}
function calcularIva(valorProducto, b) {
    let precioConIva = valorProducto * b;
    return precioConIva;
}