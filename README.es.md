# Demo frontend de POS para papelería

Un demo estático de frontend para punto de venta (POS) de papelería. Lo podés abrir localmente para recorrer una interfaz de catálogo y ticket, sin instalar nada más que Python.

[![Demo en vivo](https://img.shields.io/badge/Demo_en_vivo-GitHub_Pages-2ea44f?logo=github)](https://franklinsromero.github.io/papeleria-pos-demo/)

> **Es un demo:** los productos y el ticket están hardcodeados; no hay backend, persistencia ni cobro real.

## Demo en vivo

Abrí el sitio publicado: [https://franklinsromero.github.io/papeleria-pos-demo/](https://franklinsromero.github.io/papeleria-pos-demo/).

> **Configuración de GitHub Pages:** después de la primera ejecución del workflow de despliegue, andá a **Settings → Pages** y elegí **GitHub Actions** como **Source** si Pages todavía no está habilitado.

## Camino rápido

1. Levantá el servidor local:

   ```bash
   python3 server.py
   ```

2. Abrí [http://127.0.0.1:8000](http://127.0.0.1:8000).
3. Recorré el catálogo o alterná entre tema oscuro y claro.

## Interfaz

![Interfaz del POS de papelería](screenshot-pos.png)

## Lo que podés reconocer de un vistazo

- [x] Catálogo con categorías, SKU, precios e indicadores de stock
- [x] Ticket precargado con subtotal, impuesto del 16%, descuento y total
- [x] Controles de pago en efectivo y tarjeta
- [x] Cambio de tema oscuro/claro guardado en el almacenamiento local
- [x] Diseño responsive para escritorio y pantallas más angostas
- [x] Referencias visuales de atajos de teclado del POS

## Detalles

| Tema | Decisión |
| --- | --- |
| UI | HTML5, CSS3 y JavaScript vanilla |
| Servidor local | `ThreadingHTTPServer` de Python en `127.0.0.1:8000` |
| Moneda mostrada | Pesos mexicanos (`es-MX` / `MXN`) |
| Fuente de datos | Arreglos en memoria dentro de `app.js` |
| Preferencia de tema | `localStorage` del navegador |

<details>
<summary><strong>Estructura del proyecto</strong></summary>

| Archivo | Propósito |
| --- | --- |
| `index.html` | Estructura de la pantalla POS |
| `styles.css` | Layout, estilos responsive y variables de tema |
| `app.js` | Renderizado del catálogo/ticket hardcodeado y cambio de tema |
| `server.py` | Servidor mínimo para desarrollo local |

</details>

## Límites conocidos

- Los datos están hardcodeados y se reinician al recargar.
- No hay backend, base de datos, autenticación, sincronización de inventario ni integración de pagos.
- Los atajos de teclado mostrados son referencias visuales; no tienen manejadores de eventos de teclado.

## Próximo paso

Usalo como referencia visual de frontend, o conectá el catálogo y el ticket con una API real de POS.
