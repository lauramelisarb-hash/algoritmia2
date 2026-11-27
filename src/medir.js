const { generarVentas } = require("./generador");

const {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia,
    totalVendidoMedido,
    ventaMayorMedida,
    totalPorCiudadMedido,
    clientesRecurrentes,
    totalCiudadCadena,
    totalCiudadUnaPasada,
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

for (const n of tamañosRecurrentes) {
    const ventas = generarVentas(n);

    const inicio = `Clientes recurrentes - ${n} ventas`;

    console.time(inicio);
    clientesRecurrentes(ventas);
    console.timeEnd(inicio);
}


// ==========================================
// MEDICIÓN DE TIEMPO
// FUNCIONES CON 10.000 VENTAS
// ==========================================

const ventas10k = generarVentas(10000);

function medirTiempo(nombre, funcion) {
    console.time(nombre);
    funcion();
    console.timeEnd(nombre);
}

console.log("\nMEDICIÓN DE TIEMPO - 10.000 VENTAS");

// Funciones del Día 1

medirTiempo("totalVendido", () => totalVendido(ventas10k));

medirTiempo("unidadesVendidas", () => unidadesVendidas(ventas10k));

medirTiempo("ventaMayor", () => ventaMayor(ventas10k));

medirTiempo("ticketPromedio", () => ticketPromedio(ventas10k));

medirTiempo("ventasPorCiudad", () =>
    ventasPorCiudad(ventas10k, "Medellín")
);

// Funciones con métodos

medirTiempo("totalVendidoM", () => totalVendidoM(ventas10k));

medirTiempo("unidadesVendidasM", () => unidadesVendidasM(ventas10k));

medirTiempo("ventasPorCiudadM", () =>
    ventasPorCiudadM(ventas10k, "Medellín")
);

medirTiempo("totalPorCiudad", () => totalPorCiudad(ventas10k));

medirTiempo("unidadesPorProducto", () =>
    unidadesPorProducto(ventas10k)
);

medirTiempo("topProductosPorValor", () =>
    topProductosPorValor(ventas10k, 3)
);

medirTiempo("ventasDelDia", () =>
    ventasDelDia(ventas10k, "2026-09-06")
);

// Funciones de los retos posteriores

medirTiempo("clientesRecurrentes", () =>
    clientesRecurrentes(ventas10k)
);

medirTiempo("totalCiudadCadena", () =>
    totalCiudadCadena(ventas10k, "Medellín")
);

medirTiempo("totalCiudadUnaPasada", () =>
    totalCiudadUnaPasada(ventas10k, "Medellín")
);

// Funciones instrumentadas

medirTiempo("totalVendidoMedido", () => {
    totalVendidoMedido(ventas10k, { operaciones: 0 });
});

medirTiempo("ventaMayorMedida", () => {
    ventaMayorMedida(ventas10k, { operaciones: 0 });
});

medirTiempo("totalPorCiudadMedido", () => {
    totalPorCiudadMedido(ventas10k, { operaciones: 0 });
});

// Función que consulta una sola venta

medirTiempo("valorVenta", () => {
    valorVenta(ventas10k[0]);
});