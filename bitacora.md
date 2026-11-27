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

## Validación de errores reportados por gerencia – v0.1

### Error 1: Bogotá aparecía dos veces

- La ciudad Bogotá aparecía duplicada en el reporte.
- Registros con variaciones en la escritura del nombre de la ciudad, como `"Bogotá"`, `"bogotá "` y `" Bogotá"`.
- **El porque:** Las diferencias entre mayúsculas, minúsculas y espacios estaban provocando que se identificaran como ciudades diferentes.
- Se realizaron consultas utilizando `"BOGOTÁ"` y `" bogotá "`.
- Los textos podían tener diferencias de formato.
- **Corrección:** Se utilizó `toLowerCase()` y `trim()` para normalizar los nombres antes de compararlos. Las pruebas confirmaron que ambas consultas devuelven el mismo total.

### Error 2: El ticket promedio devolvía NaN cuando no había ventas

- El cálculo del ticket promedio devolvía `NaN` al consultar un día sin ventas.
- Un arreglo vacío de ventas `[]`.
- **El porque:** Se estaba intentando calcular el promedio sin tener ventas para dividir.
- Se ejecutó `ticketPromedio([])`.
- No existían ventas válidas para calcular el promedio.
- **Corrección:** Se agregó una condición que verifica si `cantidadVentas === 0`. En ese caso, la función devuelve `0` y evita realizar la división. La prueba confirmó el resultado esperado.

**Dia 2 Semana 1**

## Análisis de complejidad y medición de operaciones

### Predicciones teóricas

Antes de interpretar los resultados, se espera el siguiente comportamiento:

- **totalVendido:** O(n). Si el número de ventas aumenta 10 veces, las operaciones aumentarán aproximadamente 10 veces.
- **ventaMayor:** O(n). Al recorrer todas las ventas, las operaciones aumentarán proporcionalmente.
- **totalPorCiudad:** O(n). Recorre el arreglo una sola vez para agrupar las ventas por ciudad.
- **primeraVenta:** O(1). Siempre accede a la primera posición, independientemente del tamaño del arreglo.

### Resultados obtenidos

| Número de ventas | totalVendido | ventaMayor | totalPorCiudad | primeraVenta |
|---:|---:|---:|---:|---:|
| 100 | 100 | 200 | 200 | 1 |
| 1.000 | 1.000 | 2.000 | 2.000 | 1 |
| 10.000 | 10.000 | 20.000 | 20.000 | 1 |
| 100.000 | 100.000 | 200.000 | 200.000 | 1 |

### Comparación y conclusiones

Los resultados coinciden con el comportamiento esperado:

- `totalVendido` presenta crecimiento lineal: sus operaciones aumentan en la misma proporción que las ventas.
- `ventaMayor` presenta crecimiento lineal: registra una visita y una evaluación de condición por cada venta.
- `totalPorCiudad` presenta crecimiento lineal: registra una visita y una evaluación de condición por cada venta.
- `primeraVenta` presenta crecimiento constante: siempre registra una operación.

Se concluye que las funciones `totalVendido`, `ventaMayor` y `totalPorCiudad` tienen complejidad O(n), mientras que `primeraVenta` tiene complejidad O(1).

No se identificó una función O(n²) entre las funciones medidas.

## Traza de clientes recurrentes

Se utilizó un arreglo de 5 ventas con los siguientes clientes:

C01, C02, C01, C03, C02.

La función selecciona cada venta mediante un ciclo externo y la compara con todas las ventas mediante un ciclo interno.

| Venta exterior | Comparaciones realizadas |
|---|---:|
| 1 | 5 |
| 2 | 5 |
| 3 | 5 |
| 4 | 5 |
| 5 | 5 |
| **Total** | **25** |

Con 5 ventas se realizan 25 comparaciones.

Al generalizar el comportamiento, con n ventas se realizan n × n comparaciones, es decir, n².

Por esta razón, la función presenta un crecimiento cuadrático O(n²).

# Minireto 7

Crear dos funciones para calcular el total vendido en una ciudad:

- `totalCiudadCadena()`: utiliza `map`, `filter`, `map` y `reduce`.
- `totalCiudadUnaPasada()`: utiliza un ciclo `for...of` sin crear arreglos intermedios.

# Desarrollo

**Versión encadenada:**
- Normaliza las ciudades con `map`.
- Filtra las ventas de la ciudad solicitada con `filter`.
- Calcula el valor de cada venta con otro `map`.
- Suma los resultados con `reduce`.

**Versión de una pasada:**
- Recorre las ventas con `for...of`.
- Normaliza y compara las ciudades.
- Acumula el valor de las ventas que coinciden.

# Pruebas

Se generaron 10.000 ventas y se compararon ambas funciones.

| Función | Resultado |
|---|---:|
| totalCiudadCadena | $481.571.000 |
| totalCiudadUnaPasada | $481.571.000 |

Ambas devolvieron el mismo resultado.

# Recorridos y arreglos

| Versión | Recorridos | Arreglos nuevos |
|---|---:|---:|
| Encadenada | 4 | 3 |
| Una pasada | 1 | 0 |

# Complejidad temporal

Ambas funciones tienen complejidad O(n).

La versión encadenada realiza cuatro recorridos: O(4n). Al eliminar las constantes, se simplifica a O(n).

La versión de una pasada también es O(n), porque recorre las ventas una sola vez.

# Complejidad espacial del motor

| Función | Complejidad |
|---|---|
| valorVenta | O(1) |
| totalVendido | O(1) |
| unidadesVendidas | O(1) |
| ventaMayor | O(1) |
| ticketPromedio | O(1) |
| ventasPorCiudad | O(1) |
| totalVendidoM | O(1) |
| unidadesVendidasM | O(1) |
| ventasPorCiudadM | O(n) |
| totalPorCiudad | O(n) |
| unidadesPorProducto | O(n) |
| topProductosPorValor | O(n) |
| ventasDelDia | O(n) |
| clientesRecurrentes | O(n) |
| totalVendidoMedido | O(1) |
| ventaMayorMedida | O(1) |
| totalPorCiudadMedido | O(n) |
| totalCiudadCadena | O(n) |
| totalCiudadUnaPasada | O(1) |
| generarVentas | O(n) |

# Decisión final

Se decidió conservar `totalCiudadUnaPasada()` porque realiza un solo recorrido, no crea arreglos intermedios y utiliza memoria adicional constante O(1).

Aunque la versión encadenada es legible y también tiene complejidad temporal O(n), la versión de una pasada aprovecha mejor los recursos.

# Conclusión

El reto permitió comprender que dos algoritmos pueden producir el mismo resultado y tener la misma complejidad temporal, pero utilizar diferentes cantidades de memoria. Por eso, al desarrollar soluciones debemos considerar tanto la legibilidad como la eficiencia.

