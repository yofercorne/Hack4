# hck4-guía

## Paso 1: Clonar el Repositorio

1. Abre tu terminal o línea de comandos.

2. Navega al directorio donde deseas clonar el repositorio usando el comando `cd`.

3. Ejecuta el siguiente comando para clonar el repositorio:

   ```
   git clone [URL_DEL_REPOSITORIO]
   ```

   Sustituye `[URL_DEL_REPOSITORIO]` con la URL del repositorio que deseas clonar.

4. Una vez que el repositorio se haya clonado correctamente, navega al directorio del proyecto con el comando `cd [NOMBRE_DEL_PROYECTO]`, donde `[NOMBRE_DEL_PROYECTO]` es el nombre del directorio del proyecto recién clonado.

## Paso 2: Abrir el Proyecto en IntelliJ IDEA

1. Abre IntelliJ IDEA en tu computadora.

2. En el menú principal, selecciona "File" (Archivo) y luego "Open..." (Abrir...).

3. Navega hasta el directorio del proyecto que clonaste en el Paso 1 y selecciona el directorio DEMO. Luego, haz clic en "Open" (Abrir).

4. IntelliJ IDEA abrirá el proyecto y lo cargará en el entorno de desarrollo.

## Paso 3: Asegurarse de las Configuraciones de la Base de Datos

1. En el proyecto, busca el archivo de configuración de la base de datos. En el ejemplo anterior, esto se hizo en el archivo `application.properties` o `application.yml`.

2. Asegúrate de que las configuraciones de la base de datos sean correctas, incluyendo la URL, el nombre de usuario y la contraseña. Deben coincidir con la configuración de tu base de datos.

3. Si es necesario, realiza las modificaciones en el archivo de configuración y guárdalas.

## Paso 4: Configurar una Nueva Spring Boot Configuration

1. En la parte superior de la ventana de IntelliJ IDEA, verás un botón verde de "Run" (Ejecutar) con un triángulo. Junto a este botón, encontrarás un menú desplegable. Haz clic en el menú desplegable.

2. Selecciona "Edit Configurations..." (Editar Configuraciones...).

3. En la ventana "Run/Debug Configurations" (Configuraciones de Ejecución/Depuración), haz clic en el icono "+" en la esquina superior izquierda y selecciona "Spring Boot" en el menú desplegable.

4. En la configuración de Spring Boot, puedes proporcionar un nombre para la configuración si lo deseas.

5. En la sección "Main Class" (Clase Principal), utiliza el botón de búsqueda o escribe el nombre de la clase principal de tu aplicación Spring Boot. En tu caso, sería la clase "DemoApplication".

6. Asegúrate de que la opción "Single instance only" (Solo una instancia) esté seleccionada.

7. Haz clic en "Apply" (Aplicar) y luego en "OK" para guardar la configuración.

   ![La configuración se tiene que ver de esta manera](https://cdn.discordapp.com/attachments/834907040886554694/1169000186324992090/image.png?ex=6553cf43&is=65415a43&hm=cf6ea06a710958a335b90ec66a83cf3e175d1887c230baeca4b7414cfa2a6bf1&)


## Paso 5: Ejecutar la Aplicación

1. Ahora, en la parte superior de IntelliJ IDEA, selecciona la configuración de Spring Boot que acabas de crear en el menú desplegable junto al botón de "Run" (Ejecutar).

2. Haz clic en el botón de "Run" (Ejecutar) para iniciar la aplicación Spring Boot.

## Paso 6: Interacción con la BD

1. Hacemos click en el ícono de bd a la izquierda superior de intellij.
   
![La configuración se tiene que ver de esta manera](https://cdn.discordapp.com/attachments/834907040886554694/1169001187232723054/image.png?ex=6553d032&is=65415b32&hm=07c27b5a1c5c3f49cf1ce92dbcbc1e22669d7a784f67dfccd434755bce285f54&)

2. Hacemos click en el ícono '+' y agregamos una conección a PostgreSQL

![La configuración se tiene que ver de esta manera](https://cdn.discordapp.com/attachments/834907040886554694/1169001800846811247/image.png?ex=6553d0c4&is=65415bc4&hm=08ed45180a1d17e3f8952f5863ded2acd78064926459ff12f6bbb033ccf3efae&)

3. Asegúrence que los ajustes sean los correctos. (usuario, contraseña)

![La configuración se tiene que ver de esta manera](https://cdn.discordapp.com/attachments/834907040886554694/1169002252388798604/image.png?ex=6553d12f&is=65415c2f&hm=b8efc7365799a0eb71d82b27c9b5bdfebc42a6514e90b9caf63270f478455b35&)

4. Ahora van a poder interactuar de forma más directa con la base de datos creando y eliminando elementos de las tablas con más facilidad!

![La configuración se tiene que ver de esta manera](https://media.discordapp.net/attachments/834907040886554694/1169002780229369866/image.png?ex=6553d1ad&is=65415cad&hm=95891bed36d7b734a55ce9b1735c44a9bde7739c1a114fde62eda2e08397ac86&=&width=958&height=537)
