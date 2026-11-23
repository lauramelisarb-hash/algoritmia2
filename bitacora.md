# Reto de algoritmia – Analítica de ventas

## Objetivo - Semana 1

Desarrollar funciones en JavaScript que permitan analizar un conjunto de registros de ventas mediante ciclos `for...of`, acumuladores, condicionales y funciones.

## Funciones desarrolladas

- **valorVenta(venta):** multiplica la cantidad de productos vendidos por su precio unitario.
- **totalVendido(ventas):** calcula el dinero total de las ventas.
- **unidadesVendidas(ventas):** calcula la cantidad total de unidades vendidas.
- **ventaMayor(ventas):** identifica y devuelve el registro de la venta de mayor valor.
- **ticketPromedio(ventas):** calcula el promedio del valor de las ventas cuya cantidad es mayor que cero.
- **ventasPorCiudad(ventas, ciudad):** calcula el total vendido en una ciudad, ignorando mayúsculas y espacios sobrantes.

## Decisiones para los casos sin datos

- `totalVendido([])` devuelve 0.
- `unidadesVendidas([])` devuelve 0.
- `ventaMayor([])` devuelve null, porque no existe un registro que pueda seleccionarse.
- `ticketPromedio([])` devuelve 0, porque no existen ventas válidas para calcular el promedio.
- `ventasPorCiudad([], ciudad)` devuelve 0, porque no existen registros para sumar.


## Resultados obtenidos con el arreglo completo

- Total vendido: $1.027.000.
- Unidades vendidas: 22.
- Venta de mayor valor: ID 10, por $168.000.
- Ticket promedio: aproximadamente $93.363,64.
- Ventas en Medellín: $398.000.

## Aprendizajes

Durante el desarrollo del reto se utilizaron ciclos `for...of` para recorrer arreglos, acumuladores para sumar valores, condicionales para realizar validaciones y funciones para reutilizar operaciones.

También se implementó la normalización de textos para mejorar la comparación de ciudades y se evaluaron los casos en los que las funciones reciben arreglos vacíos.