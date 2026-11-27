
// PRUEBAS DE ANALITICA//

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
    ventasDelDia,
    clientesRecurrentes,
    totalCiudadCadena,
    totalCiudadUnaPasada,
} = require("./analitica");

const { generarVentas } = require("./generador");


console.log("\nTOTAL VENDIDO");
console.log(totalVendido(ventas));
console.log(totalVendidoM(ventas));


console.log("\nUNIDADES VENDIDAS");
console.log(unidadesVendidas(ventas));
console.log(unidadesVendidasM(ventas));


console.log("\nVENTAS POR MEDELLÍN");
console.log(ventasPorCiudad(ventas, "Medellín"));
console.log(ventasPorCiudadM(ventas, "Medellín"));


console.log("\nTOTAL POR CIUDAD");
console.log(totalPorCiudad(ventas));


console.log("\nUNIDADES POR PRODUCTO");
console.log(unidadesPorProducto(ventas));


console.log("\nTOP 3 PRODUCTOS POR VALOR");
console.log(topProductosPorValor(ventas, 3));


console.log("\nVENTAS DEL DÍA");
console.log(ventasDelDia(ventas, "2026-09-06"));


console.log("\nCLIENTES RECURRENTES");
console.log(clientesRecurrentes(ventas));


// ==========================================
// PRUEBA DEL GENERADOR
// ==========================================

console.log("\nPRUEBA DEL GENERADOR");

const ventasGeneradas = generarVentas(5);

console.log(ventasGeneradas);
console.log("Cantidad generada:", ventasGeneradas.length);

const ventasPrueba = generarVentas(10000);

const resultadoCadena = totalCiudadCadena(ventasPrueba, "Medellín");

const resultadoUnaPasada = totalCiudadUnaPasada(ventasPrueba, "Medellín");

console.log("Versión encadenada:", resultadoCadena);
console.log("Versión una pasada:", resultadoUnaPasada);

console.log("¿Los resultados son iguales?", resultadoCadena === resultadoUnaPasada);