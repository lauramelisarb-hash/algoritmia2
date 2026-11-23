//Dia 1 - Semana1//

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

// Dia 2 - Semana1//



module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad
};
