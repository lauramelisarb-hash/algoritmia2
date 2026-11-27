
const productos = [
    "Origen Huila 500 g",
    "Origen Nariño 250 g",
    "Origen Sierra 500 g",
    "Prensa francesa",
    "Molino manual"
];

const precios = [42000, 26000, 45000, 95000, 120000];

const ciudades = ["Medellín", "Bogotá", "Cali", "Pereira"];

function generarVentas(n) {
    const ventas = [];
    const cantidadClientes = Math.max(1, Math.floor(n / 3));

    for (let i = 0; i < n; i++) {
        const indiceProducto = Math.floor(Math.random() * productos.length);
        const indiceCiudad = Math.floor(Math.random() * ciudades.length);
        const cliente = Math.floor(Math.random() * cantidadClientes) + 1;
        const cantidad = Math.floor(Math.random() * 5) + 1;

        ventas.push({
            id: i + 1,
            fecha: "2026-09-06",
            cliente: `C${String(cliente).padStart(2, "0")}`,
            producto: productos[indiceProducto],
            ciudad: ciudades[indiceCiudad],
            cantidad: cantidad,
            precio: precios[indiceProducto]
        });
    }

    return ventas;
}

module.exports = { generarVentas };
