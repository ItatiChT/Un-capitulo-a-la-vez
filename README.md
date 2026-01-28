Un capítulo a la vez: Gestión de Lecturas Académicas 📚✍️

Este proyecto es una API REST desarrollada en JavaScript diseñada específicamente para acompañar el proceso de escritura de tesis y tesinas. Su función principal es permitir que las y los estudiantes organicen su bibliografía de manera estratégica, diferenciando entre lecturas pendientes, realizadas y, sobre todo, evaluando la relevancia de cada texto para su investigación.

#Tecnologías utilizadas:

Node.js & Express.js: Motor del servidor y manejo de rutas.
bcrypt: Para el cifrado de seguridad de las contraseñas de las y los usuarios.
jsonwebtoken (JWT): Implementación de tokens para proteger la información del tesista.
cors: Para permitir la comunicación fluida entre el frontend y el backend.
dotenv: Gestión de variables de entorno (seguridad de claves).
Bootstrap: Framework utilizado para un diseño de interfaz limpio y académico.

#Estructura del Proyecto

1. index.js: Es el corazón del servidor. Configura los middlewares globales, conecta las rutas y define el puerto de ejecución (configurado para adaptarse dinámicamente a entornos como Render).
   
2.  Rutas (userRoutes.js y lecturaRoutes.js)
Usuarios: Maneja el registro y acceso.
Lecturas: Gestiona el CRUD bibliográfico. Las rutas de lecturas están protegidas: requieren que el usuario esté logueado y presente un token válido.
NOTA: Para pruebas en Postman, se debe incluir el token en la pestaña 'Authorization' bajo el formato Bearer <token>.

3. Controladores y Modelos (lecturaController.js y lecturaModel.js): Se encargan de la lógica de negocio y la manipulación de datos:
Obtener lecturas (getLecturas): Lista todo el material bibliográfico guardado por el usuario.
Añadir lectura (addLectura): Registra un nuevo libro o artículo.
    IMPORTANTE: El campo Relevancia y notas permite texto libre para que el estudiante explique por qué este autor es clave para su tesis o incluya citas o resumenes.
Actualizar y Eliminar: Permite editar notas de lectura o descartar material que ya no se considera necesario para la investigación.
Autenticación: Funciones de register y login para asegurar que cada tesista acceda solo a su propio material.

4. Middlewares (authMiddleware.js)
Filtro de seguridad que verifica la identidad del usuario antes de permitirle ver o modificar su lista de lecturas.

5. Data (users.json y lecturas.json)
El sistema utiliza persistencia en archivos JSON, simulando una base de datos local que mantiene la información a salvo incluso si se reinicia el servidor.

6. Public (public/)
Contiene la interfaz de usuario. El archivo script.js actúa como puente, consumiendo la API y reflejando los cambios en el navegador en tiempo real mediante Fetch.

#Instalación y Configuración

Clonar el repositorio: git clone https://github.com/ItatiChT/Un-capitulo-a-la-vez.git
Instalar dependencias: npm install
Configurar entorno: Crear un archivo .env con las variables PORT y JWT_SECRET.
Ejecutar el servidor: npm start

#Endpoints de la API

La comunicación con el servidor se organiza en dos grupos principales: acceso público y gestión protegida.

Usuarios (Acceso Público)
POST /users/register: Permite el registro de nuevos tesistas en el sistema.
POST /users/login: Valida las credenciales y devuelve un Token JWT necesario para las rutas protegidas.

Lecturas (Acceso Protegido con Token)
GET /items: Recupera y lista todas las lecturas vinculadas al perfil del usuario autenticado.
POST /items: Crea un nuevo registro bibliográfico.
PUT /items/:id: Permite la edición de campos específicos (como cambiar el estado de la lectura o actualizar las notas).
DELETE /items/:id: Elimina definitivamente un registro del listado del usuario.

📖 Estructura de una Lectura
Cada ficha bibliográfica está diseñada para capturar la esencia del material de investigación, facilitando el análisis crítico posterior. Los campos incluidos son:
Campo
Descripción
Título y Autor
Identificación básica del material académico.
Estado
Indicador binario para organizar el flujo de trabajo: Pendiente o Leída.
Relevancia: Campo de texto libre donde el tesista describe el aporte específico del texto a su investigación o la raozn por la que lo incluye en la biblioteca, ya se por una capitulo especifico o la recomendación de un profesor.
Notas: Espacio para volcar resúmenes, citas textuales importantes u observaciones generales.
Fecha de creación: Registro automático del momento en que se añadió el material al sistema.

💡 Nota sobre Seguridad
Todas las rutas bajo el prefijo /items cuentan con un middleware de autenticación. Este verifica que el encabezado de la solicitud contenga un Authorization: Bearer <token>, asegurando que los registros de cada tesista sean privados y personales.

#Demo

https://un-capitulo-a-la-vez-1.onrender.com/

Para poder editar, añadir y eliminar es necesraio que se creen una cuneta nueva. Pero para la demostracion si prefieren pueden ingresa con usuario: usuariodeprueba  contraseña: contraseña123