const ventas = require("./datos");
const a = require("./analitica");

console.log("==========================================");
console.log("          REPORTE DE VENTAS");
console.log("==========================================");

console.log("\nRESUMEN GENERAL");
console.log("------------------------------------------");

console.log(`Total vendido: $${a.totalVendidoM(ventas).toLocaleString("es-CO")}`);
console.log(`Unidades vendidas: ${a.unidadesVendidasM(ventas)}`);

console.log("\nVENTAS POR CIUDAD");
console.log("------------------------------------------");
Object.entries(a.totalPorCiudad(ventas)).forEach(([ciudad, total]) => {
    console.log(`${ciudad}: $${total.toLocaleString("es-CO")}`);
});

console.log("\nUNIDADES POR PRODUCTO");
console.log("------------------------------------------");
Object.entries(a.unidadesPorProducto(ventas)).forEach(([producto, unidades]) => {
    console.log(`${producto}: ${unidades}`);
});

console.log("\nTOP 3 PRODUCTOS POR VALOR");
console.log("------------------------------------------");
const topProductos = a.topProductosPorValor(ventas, 3);
topProductos.forEach((producto, index) => {
 console.log(`${index + 1}. ${producto[0]}: $${producto[1].toLocaleString("es-CO")}`);
});

console.log("\nRESUMEN DE VENTAS POR DÍA");
console.log("------------------------------------------");

const fecha = "2026-09-01";
const ventasDia = a.ventasDelDia(ventas, fecha);

console.log(`Fecha: ${fecha}`);
console.log(`Cantidad de ventas: ${ventasDia.length}`);
console.log(`Total vendido: $${a.totalVendidoM(ventasDia).toLocaleString("es-CO")}`);