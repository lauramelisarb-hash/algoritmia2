
const { generarVentas } = require("./generador");

const {
    totalVendidoMedido,
    ventaMayorMedida,
    totalPorCiudadMedido,
    clientesRecurrentes,
} = require("./analitica");

// ==================================
// FUNCIÓN DE PRUEBA: PRIMERA VENTA
// ==================================

function primeraVenta(ventas, contador) {
    contador.operaciones++;
    return ventas[0];
}

// ==================================
// MEDICIÓN DE OPERACIONES
// ==================================

const tamaños = [100, 1000, 10000, 100000];

const resultados = [];

for (const n of tamaños) {
    const ventas = generarVentas(n);

    const c1 = { operaciones: 0 };
    const c2 = { operaciones: 0 };
    const c3 = { operaciones: 0 };
    const c4 = { operaciones: 0 };

    totalVendidoMedido(ventas, c1);
    ventaMayorMedida(ventas, c2);
    totalPorCiudadMedido(ventas, c3);
    primeraVenta(ventas, c4);

    resultados.push({
        n: n,
        totalVendido: c1.operaciones,
        ventaMayor: c2.operaciones,
        totalPorCiudad: c3.operaciones,
        primeraVenta: c4.operaciones
    });
}

console.log("\nMEDICIÓN DE OPERACIONES");
console.table(resultados);


// ==================================
// MEDICIÓN DE TIEMPO
// CLIENTES RECURRENTES
// ==================================

const tamañosRecurrentes = [1000, 2000, 4000, 8000, 16000];

const tiemposRecurrentes = [];

for (const n of tamañosRecurrentes) {
    const ventas = generarVentas(n);

    const inicio = `Clientes recurrentes - ${n} ventas`;

    console.time(inicio);

    clientesRecurrentes(ventas);

    console.timeEnd(inicio);
}
