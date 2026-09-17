Estructura y arquitectura del proyecto Angular.

#### Este prompt define las reglas obligatorias para la estructura de archivos, carpetas y desarrollo de la interfaz del proyecto.

# Tecnologías y librerías

Siempre se utilizará Angular Material para los componentes de interfaz.- No se utilizarán bibliotecas externas adicionales, salvo que yo lo autorice explícitamente. Antes de utilizar o instalar una biblioteca externa, debes consultarme.
Estructura de directorios.  Estos directorios ya han sido creados y tienen una función específica dentro del proyecto. Debes respetar siempre su ubicación y propósito.

**1. "src/assets"** Todo tipo de recursos multimedia, incluyendo imágenes, videos, iconos, vectores, SVG, audios, fuentes y demás recursos estáticos.

**2. "src/environments"** Configuraciones de entorno, variables de configuración y URLs/endpoints base de APIs.

**3. "src/app/components/build"** Componentes reutilizables de construcción de UI, es decir, componentes base o piezas pequeñas que sirven para construir componentes o páginas más complejas.

**4. "src/app/components/[extensiones]"** Componentes únicos y reutilizables de la interfaz, como botones, header, footer, search y otros componentes independientes de UI.

**5. "src/app/core"** Por definir.

**6. "src/app/directives"** Por definir.

**7. "src/app/enums"** Enumeraciones ("enum") utilizadas por la aplicación.

**8. "src/app/global"** Por definir.

**9. "src/app/interfaces"** Todo tipo de interfaces y definiciones de tipos utilizadas por la aplicación.

**10. "src/app/tools"** Herramientas ya definidas como; compresor de imagenes, snackbas, componentes completados para importar y utilizar

**11. "src/app/pages"** Páginas/vistas principales de la aplicación y su estructura específica.

---

# Reglas obligatorias de ubicación

**1.** Nunca crees archivos o carpetas directamente en "src" o "src/app" si existe un directorio especializado para ese tipo de contenido.

**2.** Cuando te solicite crear un archivo, servicio, componente, interface, clase, directiva, enum, herramienta o carpeta sin indicarte explícitamente la ubicación, debes determinar automáticamente dónde crearlo según la estructura y las reglas definidas en este documento.

**3.** Debes respetar siempre los directorios existentes y el propósito específico de cada uno.

**4.** No debes crear archivos en ubicaciones arbitrarias o diferentes a las establecidas.

**5.** Si necesito crear un tipo de archivo cuya carpeta correspondiente todavía no está definida en esta estructura, debes preguntarme antes de crear una nueva carpeta o decidir su ubicación por tu cuenta.

**6.** La ubicación debe determinarse según la responsabilidad principal del archivo o recurso, evitando duplicaciones y manteniendo una arquitectura coherente.

**7.** Si un elemento podría pertenecer a varias categorías, debes elegir el directorio cuya función se ajuste mejor a su propósito principal.

**8.** No debes modificar, mover, eliminar o renombrar directorios existentes sin mi autorización explícita.

---

# Ejemplo de comportamiento

#### Si te solicito:

**«"Crea una interface de datos personales."»** Y no especifico una ubicación, debes identificar que se trata de una interface y crearla en: **"src/app/interfaces"**

No debes crearla directamente dentro de "src", "src/app" ni en otra ubicación.

De la misma manera, si solicito un recurso multimedia, deberá ir en **"src/assets"**; si solicito una página, deberá ir en **"src/app/pages"**; y si solicito una herramienta ya definida para reutilizarla, deberá ir en **"src/app/tools"**.

---

# Regla general

Antes de crear cualquier archivo o carpeta, debes comprobar mentalmente qué directorio de esta estructura corresponde a su función. La estructura definida en este **prompt** tiene prioridad sobre las ubicaciones predeterminadas que Angular pueda utilizar al generar archivos.

No debes asumir que una ubicación estándar de Angular es correcta si contradice esta arquitectura.