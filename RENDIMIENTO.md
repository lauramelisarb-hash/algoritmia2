# Análisis de rendimiento – MiniRetos de Algoritmia

**Versión:** 0.2

## 1. Complejidad de las funciones

| Función | ¿Qué hace? | Tiempo | Espacio | Medición (10.000 ventas) |
|---|---|---|---|---:|
| `valorVenta` | Calcula el valor de una venta. | O(1) | O(1) | 0.032 ms |
| `totalVendido` | Suma el valor de todas las ventas. | O(n) | O(1) | 0.647 ms |
| `unidadesVendidas` | Suma las unidades vendidas. | O(n) | O(1) | 0.537 ms |
| `ventaMayor` | Encuentra la venta de mayor valor. | O(n) | O(1) | 0.666 ms |
| `ticketPromedio` | Calcula el promedio de venta. | O(n) | O(1) | 0.638 ms |
| `ventasPorCiudad` | Suma las ventas de una ciudad. | O(n) | O(1) | 1.443 ms |
| `totalVendidoM` | Suma las ventas con `reduce`. | O(n) | O(1) | 0.314 ms |
| `unidadesVendidasM` | Suma unidades con `reduce`. | O(n) | O(1) | 0.217 ms |
| `ventasPorCiudadM` | Filtra y suma por ciudad. | O(n) | O(n) | 1.097 ms |
| `totalPorCiudad` | Agrupa ventas por ciudad. | O(n) | O(n) | No medido |
| `unidadesPorProducto` | Agrupa unidades por producto. | O(n) | O(n) | 0.611 ms |
| `topProductosPorValor` | Ordena productos por valor vendido. | O(n + p log p) | O(n) | 0.741 ms |
| `ventasDelDia` | Filtra ventas por fecha. | O(n) | O(n) | 0.352 ms |
| `clientesRecurrentes` | Identifica clientes con varias compras. | O(n²) | O(n) | 547.7 ms |
| `totalCiudadCadena` | Calcula ventas por ciudad con varios métodos. | O(n) | O(n) | 2.539 ms |
| `totalCiudadUnaPasada` | Calcula ventas por ciudad en un recorrido. | O(n) | O(1) | 1.314 ms |
| `totalVendidoMedido` | Suma ventas y cuenta operaciones. | O(n) | O(1) | 0.072 ms |
| `ventaMayorMedida` | Busca la venta mayor y cuenta operaciones. | O(n) | O(1) | 0.058 ms |
| `totalPorCiudadMedido` | Agrupa ventas y cuenta operaciones. | O(n) | O(n) | 1.315 ms |
| `primeraVenta` | Retorna la primera venta. | O(1) | O(1) | 1 operación |

**Nota:** `n` representa la cantidad de ventas y `p` la cantidad de productos diferentes. Las funciones que crean arreglos u objetos adicionales pueden necesitar más memoria.

## 2. Mediciones de operaciones

| Ventas | `totalVendidoMedido` | `ventaMayorMedida` | `totalPorCiudadMedido` | `primeraVenta` |
|---:|---:|---:|---:|---:|
| 100 | 100 | 200 | 200 | 1 |
| 1.000 | 1.000 | 2.000 | 2.000 | 1 |
| 10.000 | 10.000 | 20.000 | 20.000 | 1 |
| 100.000 | 100.000 | 200.000 | 200.000 | 1 |

Las funciones que recorren el arreglo aumentan sus operaciones proporcionalmente a la cantidad de ventas. `primeraVenta` mantiene una operación constante.

## 3. Proyección para 1.000.000 de ventas

Las siguientes cifras son estimaciones basadas en los tiempos de 10.000 ventas:

- Para O(n), multiplicamos el tiempo por 100.
- Para O(n²), multiplicamos el tiempo por 10.000.

| Función | Tiempo estimado |
|---|---:|
| `totalVendido` | 64.7 ms |
| `unidadesVendidas` | 53.7 ms |
| `ventaMayor` | 66.6 ms |
| `ticketPromedio` | 63.8 ms |
| `ventasPorCiudad` | 144.3 ms |
| `totalVendidoM` | 31.4 ms |
| `unidadesVendidasM` | 21.7 ms |
| `ventasPorCiudadM` | 109.7 ms |
| `unidadesPorProducto` | 61.1 ms |
| `topProductosPorValor` | 74.1 ms* |
| `ventasDelDia` | 35.2 ms |
| `clientesRecurrentes` | 91.3 minutos |
| `totalCiudadCadena` | 253.9 ms |
| `totalCiudadUnaPasada` | 131.4 ms |

*La proyección de `topProductosPorValor` supone que la cantidad de productos diferentes continúa siendo reducida.*

Son estimaciones, no mediciones reales con un millón de ventas.

## 4. Riesgos de rendimiento

De mayor a menor riesgo:

1. **`clientesRecurrentes` – O(n²):** realiza recorridos repetidos y su tiempo aumenta considerablemente.
2. **`topProductosPorValor` – O(n + p log p):** puede aumentar su costo cuando hay muchos productos diferentes.
3. **Funciones O(n) que crean arreglos u objetos:** pueden consumir más memoria al crecer los datos.
4. **Funciones O(n) con espacio O(1):** recorren los datos, pero utilizan memoria adicional constante.
5. **Funciones O(1):** su rendimiento no depende de la cantidad de ventas.

## 5. Plan de optimización

La función prioritaria es `clientesRecurrentes`.

Actualmente utiliza ciclos anidados para contar las compras de cada cliente y realiza búsquedas repetidas para evitar duplicados.

## 6. Revisión de un compañero

**Estado:** Pendiente de revisión.

Se registrará en la bitácora la observación recibida y la respuesta correspondiente.

## 7. Conclusión

Las mediciones permitieron identificar el comportamiento de las funciones y comparar su rendimiento. Se encontró que `clientesRecurrentes` representa el mayor riesgo por su complejidad O(n²).

También se comprobó que `totalCiudadUnaPasada` utiliza menos tiempo y memoria que la versión encadenada.