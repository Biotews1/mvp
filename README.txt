# Prototipo Interactivo MVP - Plataforma de Profesionales ProAsesores

Este prototipo interactivo demuestra la estructura, funcionalidades esenciales y flujo de usuario del MVP de la plataforma ProAsesores. Ha sido desarrollado con HTML5, Tailwind CSS (vía CDN) y JavaScript puro (ES6+).

## Estructura de Archivos Sugerida

Para visualizar este prototipo, guarda los archivos proporcionados en la siguiente estructura de carpetas en tu escritorio o en cualquier otra ubicación:

/mvp-prototipo/
├── index.html                   # Página de Inicio
├── resultados.html              # Página de Resultados de Búsqueda
├── perfil.html                  # Página de Perfil de Profesional Detallado
├── registro-profesional.html    # Formulario de Registro para Profesionales (UI)
├── registro-usuario.html        # Formulario de Registro para Usuarios (UI)
├── dashboard-profesional.html   # Dashboard básico para el Profesional (UI)
├── css/
│   └── style.css                # Hoja de estilos CSS personalizada
├── js/
│   └── script.js                # Lógica JavaScript para interactividad
└── README.txt                   # Este archivo


**Nota:** No se necesita una carpeta `img/` ya que las imágenes son placeholders de `https://placehold.co`.

## Instrucciones para Visualizar el Prototipo

1.  **Crea la estructura de carpetas:**
    * Crea una carpeta principal llamada `mvp-prototipo`.
    * Dentro de `mvp-prototipo`, crea dos subcarpetas: `css` y `js`.

2.  **Guarda los archivos:**
    * Copia el contenido del bloque de código `index.html` y guárdalo como `index.html` dentro de la carpeta `mvp-prototipo`.
    * Copia el contenido del bloque de código `resultados.html` y guárdalo como `resultados.html` dentro de la carpeta `mvp-prototipo`.
    * Copia el contenido del bloque de código `perfil.html` y guárdalo como `perfil.html` dentro de la carpeta `mvp-prototipo`.
    * Copia el contenido del bloque de código `registro-profesional.html` y guárdalo como `registro-profesional.html` dentro de la carpeta `mvp-prototipo`.
    * Copia el contenido del bloque de código `registro-usuario.html` y guárdalo como `registro-usuario.html` dentro de la carpeta `mvp-prototipo`.
    * Copia el contenido del bloque de código `dashboard-profesional.html` y guárdalo como `dashboard-profesional.html` dentro de la carpeta `mvp-prototipo`.
    * Copia el contenido del bloque de código `css/style.css` y guárdalo como `style.css` dentro de la subcarpeta `css`.
    * Copia el contenido del bloque de código `js/script.js` y guárdalo como `script.js` dentro de la subcarpeta `js`.

3.  **Abre el prototipo en un navegador:**
    * Navega a la carpeta `mvp-prototipo` en tu explorador de archivos.
    * Haz doble clic en el archivo `index.html` (o arrástralo a la ventana de tu navegador web preferido, como Chrome, Firefox, Edge, Safari).

    Esto abrirá la página de inicio del prototipo. Desde allí, podrás navegar entre las diferentes secciones y probar las funcionalidades interactivas.

## Funcionalidades del Prototipo

* **Navegación:** Menú de navegación funcional entre las páginas principales.
* **Búsqueda de Profesionales (Página de Inicio):**
    * Filtra por especialidad (Contador, Abogado, Economista).
    * Busca por palabra clave en la descripción de la necesidad.
    * Los resultados se muestran en la página `resultados.html`.
* **Página de Resultados:**
    * Muestra una lista de perfiles profesionales ficticios basados en la búsqueda.
    * Un perfil aparece visualmente destacado (simulando monetización).
    * Se incluye un banner publicitario de ejemplo.
* **Página de Perfil del Profesional:**
    * Muestra información detallada del profesional (datos ficticios).
    * Incluye una sección visual para valoraciones (estrellas).
    * Contiene un placeholder para un mapa de cercanía.
* **Simulación de Asesoría por WhatsApp (Página de Inicio):**
    * Botón "Asesoría Inmediata / Perfilar mi Necesidad".
    * Al hacer clic, se abre un modal que simula una conversación con preguntas guiadas.
    * Al final, muestra un mensaje de conclusión y sugerencia.
* **Formularios de Registro (UI):**
    * Páginas `registro-profesional.html` y `registro-usuario.html` presentan la interfaz de los formularios. La lógica de envío no está implementada.
* **Dashboard del Profesional (UI):**
    * Página `dashboard-profesional.html` muestra un diseño básico de un panel de control para profesionales con métricas ficticias.

## Notas Importantes

* Este es un **prototipo visual e interactivo** y no un sistema de producción.
* Toda la información (perfiles, preguntas, etc.) está **hardcodeada** en los archivos HTML o JavaScript.
* No hay conexión a bases de datos ni lógica de backend real. Las interacciones como el envío de formularios o el inicio de sesión son solo simulaciones de interfaz.
* Se requiere conexión a internet para cargar la librería de Tailwind CSS desde la CDN y las fuentes de Google Fonts.

¡Espero que este prototipo sea de utilidad para visualizar y validar el MVP de ProAsesores!
