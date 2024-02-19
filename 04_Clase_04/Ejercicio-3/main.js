// 3- CARRITO DE LA COMPRA: se le pide al usuario el precio de 5 productos. Se calcula el total. En el caso de sumar 100 euros o más, se le da un descuento del 15%. Imprimir en tal caso el precio original y el precio final con el descuento. Si no, solo el precio total. Nota: te servirá crear una variable que vaya acumulando el precio total a medida que se vayan introduciendo precios.
var totalProductos =0;

for (let i=1; i<=5; i++){

    let producto = parseFloat(prompt("Ingrese el precio de un producto: "));
    var totalProductos = totalProductos+producto;
}

let descuento = 0;
let totalConDescuento = 0;

if (totalProductos >=100){
    descuento = (totalProductos * 15)/100;
    totalConDescuento = totalProductos-descuento;

    document.write("El precio final de su compra es: " + totalProductos, '\r');
    document.write("<em><b>El precio final de su compra menos el 15% de descuento es: </b></em>" + totalConDescuento);
} else {
    let cantidadFaltante = 100 - totalProductos;
    document.write("El monto de su compra no es suficiente para recibir descuento, agregue " + cantidadFaltante + "€ más, para recibir un descuento del 15% de su compra." );
}