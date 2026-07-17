Objetivo de la app "Querido lector": Que todas las librerias minorista (O no) publiquen sus libros en esta AppWed de manera gratuina y el cliente final compre de manera online.

# Notas 
Directorios = Carpetas | Ficheros = Archivos

Las importaciones siempre deben ir primero, o sea que sea la primera lectura de todo.

# Clase - 1 | 28/04/25
Comandos usados en la clase:
1- ng g c directorio/nombre 
2- ng g i directorio/ nombre

1. Crear proyecto e instalar Angular Material. Comando: ng add @angular/material
nota: siempre elegir un tema oscuro, siempre que sea el cyan-orange


2. Crear los siguientes directorios en src: 
assets (para guardar fotos muy generales. ejemplo: logo)
css (para guardar estilos css)
fonts (para guardar fuentes descargadas que usaremos en la app)
icons (para guardar iconos descargados que usaremos en la app)


3. Dentro de "app" crear otros directorios: 
admin (aplicacion para administrador)
components (componentes reutilizables. ejemplo: un boton que te lleve siempre a la pantalla inicial)
firebase (llamado de servicios firebase y configuracion)
interfaces (creacion de interfaces)
vistas (componentes que se van a mostrar en la app. ejemplo: home)


4. Vamos a angular.json y buscamos el array "styles" que serian los estilos globales de nuestra app, aqui veremos dos llamados de estilos; angular material y styles.css. Borraremos la linea de angular material, dejando solo de la styles.css. Esto para que no nos tome los stilos css de material sino los que nosotros elijamos.


5. Hacer el llamado de nuestros archivos css. Como para avisarle a nuestra app que ellos estan ahi y los utilizaremos. En "styles.css" con el codigo: @import './css/nombredefichero'


6. En las carpetas que creamos antes en "app", vamos a ir a admin y crear unos componentes: add-product-admin, card-product-admin, header-admin.

En el directorio "components" creamos otros componentes mas: btn-back, btn-icon, btn-nav, btn-share, card-product, footer, swiper, tool-bar.

En el directorio "firebase" lo mismo, pero en lugar de componentes, ficheros ts: 
analitycs.ts (analiza la app)
firebase-confing.ts (instanciar servicios) 
firestore.ts (base de datos)
messaging.ts (mensajes push/notifiaciones)
storage.ts (almacenamiento de imagenes)

En el directorio "interfaces" crearemos un archivo ts que contendra una interface que debe coincidir con la que tengamos con firebase. "product-interface.ts"

Y por ultimo, pero no menos importante; "vistas" aqui vamos a crear los siguientes componentes(ejemplo): contacto, galeria, inicio. Tambien crearemos una carpeta llamada "categorias" y dentro de esta crearemos otros componentes mas (ejemplo): ferreteria, panaderia, peluqueria.



# Clase - 2 | 29/04/25
 
 1. Creacion de nuevo componente "login" en el directorio "vistas"


 2. Creacion de carpera "environments" con el comando: ng g environments


 3. Creacion de archivo md para hacer anotaciones "nombre.md"


 4. Creacion de carpeta build con los comandos: 
 ng build --output-path build/produccion
 ng build --output-path build/development

 Lo que estamos indicando aca es; "ng" = angular, "build" = genera un archivo de compilacion, "--output-path" = pero no en cualquier lado, "build/produccion" = sino en la carpeta de nombre build y el archivo se llama produccion.

 fnal de esto: El lenguaje con el que nosotros desarrollamos no es el mismo que el navegasor lee, por eso al terminar la app debe traducirse al leguaje que entiende el navegador, pero no se llama traducir, en programacion se llama compilar. Es aqui donde llega nuestro build, imagina que solo creamos un build, la app ya esta. Tiempo despues el cliente quiere que actualices la pagina o incluso tu mismo quieres hacerle una mejora, ese cambio debe ser probrarlo. Enseñarselo al cliene, pero no en la pagina oficial, sino en otra que tenga los cambios y este en la web. 
 
 En resumen hay que compilar el mismo codigo para que se suban a direfentes url, cuando a ese codigo se le haga un cambio se suba a la app de desarrollo para que no afecte la oficial, cuando los cambios sean aprovados se sube ahora si a la oficial.


 5. Angular Material: Vamos a la pagina/biblioteca "material.angular.io" elegimos un objeto que casi siempre es un header, vamos al ts y en los imports tomamos lo que este dentro de los corchetes [] y lo vamos a pegar en los imports del componente donde lo usaremos, hecho eso ahora solo debemos tomar el html y css.


 6. Rutas: En el "app.routes.ts" se crean las rutas de toda la app, para hacer hay que posicionarnos dentro de los corchetes de "export const", ya dentro ponemos unas llaves {} y dentro de estas empezamos: {path: '', component: ComponentNombre} Lo que queremos decir es; cuando el path este vacio muestra el componente que elegimos. 

 Cuando queramos indicar a un componente es asi; {path: 'nombre', component: ComponentNOmbre}

 Tambien hay otra clase de ruta que es igual a estas, la direfencia es una pequeña cosita que lo que hace es que cuando el usuario de vaya a una ruta que no exista, lo devuelve al inicio o el componente que elijas; {path: '**', redirectTo: 'inicio', pathMatch: 'full'}

 nota: este ultimo, siempre, siempre se pone de ultimo en las rutas. Siempre.



# Clase - 3 | 01/05/25

 1. Crear directorio "css" dentro de src.


 2. Entrar al google de lidertech, ir a github y dirigirnos a nuestros repositorios, luego a "styleGlobalLider" hay dos archivos "styles.zip" y "tema-estilos-lider.zip" los vamos a descargar, eso lo hacemos entrando a cada uno de ellos y en los tres puntitos elegir "download" Ya descargado los descomprimimos.


 3. En los archivos descomprimidos vamos a ver "styles.css" al abrirlo veremos un simple codigo de importancion. Ese codigo se copia y dentro de nuestro proyecto angular se pega en "styles.css" los estilos globales de la app.


 4. Volviendo a la carpeta css que creamos al inicio, dentro de esta vamos a crear dos directorios; "lider" y "tema"

 lider: Estilos css propios de mi papá
 Tema: Estilos css propios de angular

 Ya creados los directorios vamos a ir al archivo que descargamos "tema-estilos-lider" y nos daremos cuenta que hay dos carpetas con los mismos nombres que los directorios que acabamos de crear, entramos a "estilos-lider" y vemos que hay unos archivos, al abrirlos veremos que son codigos. Entonces lo que haremos es: en la carpeta "lider" de nuestro proyecto, vamos a crear archivos css que tenga los mismos nombres que el archivo que descargamos; o sea en la carpeta "estilos-lider" hay un archivo que se llama "espaciados.css" En la carpeta "lider" de nuestro proyecto vamos a crear el mismo archivo css con el mismo nombre, Hasta ahora ese archivo esta vacio, pero el descargado no. Lo que debemos hacer es abrirlo, copiar el codigo y pegarlo en el archivo con su nombre, lo mismo que hicimos con las importaciones.

 Este proceso lo vamos a hacer con "lider" y "tema"



# Clase - 4 | 04/05/25

                                     Paginas utilizadas:
1 - Canva; Guia definitiva para la combinacion de tipografias: Expertos que crean plantillas de combinaciones de tipografias, nos sirve de inspiracion.

2 - Fontjoy: Nos da la opcion de elegir estilos de fuente y ver como se veria en nuestra app.

3 - Google fonts: Nos sirve estilos de fuente y nos da la opcion de descargarlas o utilizarlas mediante link.

--------------------------------------------------------------------------------------------------------
                                            Pasos

1. Buscar inspiracion en Canva, las plantillas ademas de mostrar titulo, descrpcion y texto, tambien nos muestra el nombre de la fuente.


2. Ir a Fontjoy y con los nombres de las tipografias de Canva buscarlas y ver como se veria en nuestra app, nos muestra titulo, descripcion y texto, todo en un fondo oscuro para solo centrarnos en las letras.


3. Con nuestras tres tipografias elegidas nos vamos a Google fonts, buscamos el nombre de cada una de nuestras tipografias (que deberian aparecer todas ya que fontjoy se alimenta de las tipografias publicadas de google fonts) Ya encontradas y elegidas nos vamos a la bolsita de compra y en lugar de descargar las fuentes le damos a "Get embed code"


4. Para importar las fuentes a nuestra app, primero debemos asegurarnos que el codigo sea para web y que sea link, ya todo verificado y bien, vamos a copiar el primer cuadrito de codigo, el que dice "embed code in the <head> oh yours html" 

Copiamos el codigo y en el index.html de nuestro proyecto lo vamos a pegar, pero no en cualquier lado, lo vamos a pegar dentro de head y en las ultimas lineas de codigo dentro del head vamos a ver dos links de google fonts, uno de las tipografias en si y el siguiente de la pagina. Vamos a tomar el link de las tipografias y lo vamos a comentar y arriba de este vamos a pegar el link que copiamos de Google fonts. 

A este punto ya podemos usar las fuentes, pero no lo hemos hecho, para hacerlo vamos a ir a tema/fuentes.css y ahi de primeras vamos a ver el uso de las tipografias anteriores, entre comillas veremos el nombre de las tipografias, en esas comillas vamos a escribir el nombre de las tipografias que usaremos

Es posible que nos de error ya que en las tipografias hay un pequeño detalle; "sans-serif" y "serif" Este pequeño, pero importante detalle es una marca de diferencia entre fuentes, ya que podemos ver que algunas fuentes tienen los extremos puntiagudos y en otros son redondeados, ese "serif" los diferencia

En Google fonts, en el mismo lugar de donde copiamos el link, mas abajo veremos el css de cada una de las fuentes que usaremos, vamos a revisar cada una de ellas y en una linea llamada "font-family" veremos el tipo de letra que es esta tipografia espefica, si "serif" o "sans-fonts" Veremos eso y en "fuentes.css" vamos a editar ese detalle, ya que si no es correcto no nos funcionara.

Nota importante: Siempre verificar esa parte.
