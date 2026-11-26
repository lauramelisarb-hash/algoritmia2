# Reto de algoritmia – Analítica de ventas

## Objetivo – Semana 1

Desarrollar funciones en JavaScript que permitan analizar un conjunto de registros de ventas mediante ciclos `for...of`, acumuladores, condicionales y funciones.

## Funciones desarrolladas – Semana 1

- **`valorVenta(venta)`:** multiplica la cantidad de productos vendidos por su precio unitario.
- **`totalVendido(ventas)`:** calcula el dinero total de las ventas.
- **`unidadesVendidas(ventas)`:** calcula la cantidad total de unidades vendidas.
- **`ventaMayor(ventas)`:** identifica y devuelve el registro de la venta de mayor valor.
- **`ticketPromedio(ventas)`:** calcula el promedio del valor de las ventas cuya cantidad es mayor que cero.
- **`ventasPorCiudad(ventas, ciudad)`:** calcula el total vendido en una ciudad, ignorando mayúsculas y espacios sobrantes.


Análisis utilizando métodos de arreglos de JavaScript, con el propósito de simplificar el código y agrupar, filtrar, acumular y ordenar información de las ventas.

## Funciones desarrolladas 

- **`totalVendidoM(ventas)`:** utiliza `reduce()` para acumular el valor total de las ventas.
- **`unidadesVendidasM(ventas)`:** utiliza `reduce()` para sumar las unidades vendidas.
- **`ventasPorCiudadM(ventas, ciudad)`:** utiliza `filter()` para seleccionar las ventas de una ciudad y `reduce()` para sumar su valor.
- **`totalPorCiudad(ventas)`:** utiliza `reduce()` para agrupar las ventas por ciudad y calcular el total vendido en cada una.
- **`unidadesPorProducto(ventas)`:** utiliza `reduce()` para agrupar los productos y acumular las unidades vendidas de cada uno.
- **`topProductosPorValor(ventas, k)`:** utiliza `reduce()` para calcular el valor vendido por producto, `Object.entries()` para convertir el objeto en un arreglo, `sort()` para ordenar los resultados de mayor a menor y `slice()` para seleccionar los primeros K productos.

## Decisiones para los casos sin datos

- `totalVendido([])` devuelve `0`.
- `unidadesVendidas([])` devuelve `0`.
- `ventaMayor([])` devuelve `null`, porque no existe un registro que pueda seleccionarse.
- `ticketPromedio([])` devuelve `0`, porque no existen ventas válidas para calcular el promedio.
- `ventasPorCiudad([], ciudad)` devuelve `0`.
- `totalPorCiudad([])` devuelve un objeto vacío `{}`.
- `unidadesPorProducto([])` devuelve un objeto vacío `{}`.
- `topProductosPorValor([], k)` devuelve un arreglo vacío `[]`.

## Resultados obtenidos con el arreglo completo

- Total vendido: **$985.000**.
- Unidades vendidas: **21**.
- Venta de mayor valor: **ID 10, por $168.000**.
- Ticket promedio: **aproximadamente $89.545,45**.
- Ventas en Medellín: **$356.000**.

### Resultados de las funciones de agrupación

**Total vendido por ciudad:**

- Medellín: $356.000.
- Bogotá: $276.000.
- Cali: $185.000.
- Pereira: $168.000.

**Unidades vendidas por producto:**

- Origen Huila 500 g: 7 unidades.
- Origen Sierra 500 g: 5 unidades.
- Origen Nariño 250 g: 6 unidades.
- Prensa francesa: 2 unidades.
- Molino manual: 1 unidad.

**Top 3 productos por valor vendido:**

1. Origen Huila 500 g: $294.000.
2. Origen Sierra 500 g: $225.000.
3. Prensa francesa: $190.000.

## Aprendizajes

Durante la primera semana aprendí a recorrer arreglos mediante ciclos `for...of`, utilizar acumuladores, aplicar condicionales y crear funciones para reutilizar operaciones.

Tambien aprendí a utilizar métodos de arreglos como `reduce()`, `filter()`, `sort()` y `slice()`. Comprendí que `reduce()` permite acumular información y también construir objetos para agrupar resultados, mientras que `filter()` permite seleccionar registros que cumplen una condición.

También aprendí a utilizar `Object.entries()` para convertir un objeto en un arreglo de pares y a ordenar los resultados sin modificar el arreglo original mediante el operador spread (`...`).

Finalmente, reforcé la importancia de probar las funciones y comparar los resultados de las versiones desarrolladas con ciclos y con métodos de arreglos para verificar que ambas produzcan los mismos resultados.
