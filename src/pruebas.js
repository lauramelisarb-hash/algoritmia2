const ventas = require("./datos");

const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventasPorCiudad,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
} = require("./analitica");


console.log("Total vendido:");
console.log(totalVendido(ventas));
console.log(totalVendidoM(ventas));

console.log("Unidades vendidas:");
console.log(unidadesVendidas(ventas));
console.log(unidadesVendidasM(ventas));

console.log("Ventas por Medellín:");
console.log(ventasPorCiudad(ventas, "Medellín"));
console.log(ventasPorCiudadM(ventas, "Medellín"));

console.log("Total por ciudad:");
console.log(totalPorCiudad(ventas));

console.log("Unidades por producto:");
console.log(unidadesPorProducto(ventas));

console.log("Top 3 productos por valor:");
console.log(topProductosPorValor(ventas, 3));