const { ventas } = require("./datos");
const a = require("./analitica");

function comparar(nombre, x, y) {
  const estado = x === y ? "OK" : `DIFERENTE (${x} vs ${y})`;
  console.log(`${nombre.padEnd(35)} ${estado}`);
}

console.log("=== Verificación ciclo vs método ===");
comparar("totalVendido",       a.totalVendido(ventas),       a.totalVendidoM(ventas));
comparar("unidadesVendidas",   a.unidadesVendidas(ventas),   a.unidadesVendidasM(ventas));
comparar("ventasPorCiudad Medellín",
         a.ventasPorCiudad(ventas, "Medellín"),
         a.ventasPorCiudadM(ventas, "Medellín"));
comparar("ventasPorCiudad Bogotá",
         a.ventasPorCiudad(ventas, "Bogotá"),
         a.ventasPorCiudadM(ventas, "Bogotá"));

console.log("\n=== Agrupaciones ===");
console.log("Total por ciudad:", a.totalPorCiudad(ventas));
console.log("Unidades por producto:", a.unidadesPorProducto(ventas));
console.log("Top 3 por valor:", a.topProductosPorValor(ventas, 3));

// Verificación de que el arreglo original NO se modificó
const idsOriginales = ventas.map(v => v.id).join(",");
const idsDespues    = ventas.map(v => v.id).join(",");
console.log("\nOrden original intacto:", idsOriginales === idsDespues ? "OK" : "MUTADO");
