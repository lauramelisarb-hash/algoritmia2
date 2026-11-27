//Dia 1 - Semana1//


//Version ciclos//
// Valor venta//
function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

//Total vendido//
function totalVendido(ventas) {
    let total = 0;

    for (const venta of ventas) {
        total = total + valorVenta(venta);
    }

    return total;
}

//Unidades vendidas//
function unidadesVendidas(ventas) {
    let total = 0;

    for (const venta of ventas) {
        total = total + venta.cantidad;
    }

    return total;
}

//Venta mayor//
function ventaMayor(ventas) {
    let mayor = null;
    
    for (const venta of ventas) {
    
        if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
            }

    return mayor;
}

//Promedio ventas//
function ticketPromedio(ventas) {
    let total = 0;
    let cantidadVentas = 0;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            total += valorVenta(venta);
            cantidadVentas++;
        }
    }

    if (cantidadVentas === 0) {
        return 0;
    }

    return total / cantidadVentas;
}

//Ventas por ciudad//
function ventasPorCiudad(ventas, ciudad) {
    let total = 0;

    for (const venta of ventas) {
        if (venta.ciudad.toLowerCase().trim() === ciudad.toLowerCase().trim()) {
            total += valorVenta(venta);
        }
    }

    return total;
}

// - Semana1//

// Version metodos//
// --- versiones con métodos ---
function totalVendidoM(ventas) {
    return ventas.reduce((acumulador, venta) => {
        return acumulador + valorVenta(venta);
    }, 0);
}

function unidadesVendidasM(ventas) {
    return ventas.reduce((acumulador, venta) => {
        return acumulador + venta.cantidad;
    }, 0);
}

function ventasPorCiudadM(ventas, ciudad) {

    const ventasFiltradas = ventas.filter(venta =>
        venta.ciudad.toLowerCase().trim() === ciudad.toLowerCase().trim()
    );
    return ventasFiltradas.reduce((acumulador, venta) => {
        return acumulador + valorVenta(venta);
    }, 0);

}

// --- agrupaciones ---//
function totalPorCiudad(ventas) {

    return ventas.reduce((acumulador, venta) => {

       const ciudad = venta.ciudad.trim().toLowerCase();

        if (!acumulador[ciudad]) {
            acumulador[ciudad] = 0;
        }

        acumulador[ciudad] += valorVenta(venta);

        return acumulador;

    }, {});

}

function unidadesPorProducto(ventas) {

    return ventas.reduce((acumulador, venta) => {

        const producto = venta.producto;

        if (!acumulador[producto]) {
            acumulador[producto] = 0;
        }
        acumulador[producto] += venta.cantidad;

        return acumulador;

    }, {});

}

function topProductosPorValor(ventas, k) {

    const totalProductos = ventas.reduce((acumulador, venta) => {

        const producto = venta.producto;

        if (!acumulador[producto]) {
            acumulador[producto] = 0;
        }

        acumulador[producto] += valorVenta(venta);

        return acumulador;

    }, {});

    const productosArray = Object.entries(totalProductos);

    productosArray.sort((a, b) => b[1] - a[1]);

    return productosArray.slice(0, k);

}

function ventasDelDia(ventas, fecha) {
    return ventas.filter(venta => venta.fecha === fecha);
}   

//Dia 2 semana 1//

//Contadores//
function totalVendidoMedido(ventas, contador) {
    let total = 0;

    for (const venta of ventas) {
        contador.operaciones++;
        total = total + valorVenta(venta);
    }

    return total;
}

function ventaMayorMedida(ventas, contador) {
    let mayor = null;

    for (const venta of ventas) {
        contador.operaciones++; 
        contador.operaciones++;

        if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }

    return mayor;
}

function totalPorCiudadMedido(ventas, contador) {
    return ventas.reduce((acumulador, venta) => {
        contador.operaciones++; 

        const ciudad = venta.ciudad.trim().toLowerCase();

        contador.operaciones++;
        if (!acumulador[ciudad]) {
            acumulador[ciudad] = 0;
        }

        acumulador[ciudad] += valorVenta(venta);

        return acumulador;
    }, {});
}

function clientesRecurrentes(ventas) {
    const recurrentes = [];

    for (const venta of ventas) {
        let cantidad = 0;

        for (const otraVenta of ventas) {
            if (venta.cliente === otraVenta.cliente) {
                cantidad++;
            }
        }

        if (cantidad > 1 && !recurrentes.includes(venta.cliente)) {
            recurrentes.push(venta.cliente);
        }
    }

    return recurrentes;
}


module.exports = {
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
    
};
