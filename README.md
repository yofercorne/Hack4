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

   ![Descripción de la Captura de Pantalla](https://cdn.discordapp.com/attachments/834907040886554694/1169000186324992090/image.png?ex=6553cf43&is=65415a43&hm=cf6ea06a710958a335b90ec66a83cf3e175d1887c230baeca4b7414cfa2a6bf1&)


## Paso 5: Ejecutar la Aplicación

1. Ahora, en la parte superior de IntelliJ IDEA, selecciona la configuración de Spring Boot que acabas de crear en el menú desplegable junto al botón de "Run" (Ejecutar).

2. Haz clic en el botón de "Run" (Ejecutar) para iniciar la aplicación Spring Boot.
