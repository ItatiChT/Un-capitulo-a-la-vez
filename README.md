📚 Un capítulo a la vez: Sistema de Gestión de Proyectos Académicos
Este sistema nace para acompañar a estudiantes universitarios en el proceso de elaboración de tesis y trabajos de investigación. Facilita la organización de contenidos, tareas y, fundamentalmente, la gestión de la bibliografía.
Para este desarrollo, nos centramos en el Módulo de Gestión de Lecturas Académicas, permitiendo un control exhaustivo sobre el material de estudio.

🛠️ Tecnologías utilizadas
Backend: Node.js y Express.
Autenticación: JSON Web Tokens (JWT).
Base de datos: Sistema de archivos (Persistencia en archivos JSON).
Frontend: HTML5, CSS3 y JavaScript (Vanilla).

🚀 Instalación y Uso
Clonar el repositorio:  git clone https://github.com/ItatiChT/Un-capitulo-a-la-vez.git
Ingresar a la carpeta del servidor: cd Backend
Instalar las dependencias: npm install
Configurar variables de entorno: Crear un archivo .env en la carpeta Backend con:
   PORT=3000
   JWT_SECRET=tu_clave_secreta
Ejecutar: npm start


🛣️ Endpoints de la API
Usuarios (Públicos)
POST /users/register: Registro de nuevos tesistas.
POST /users/login: Inicio de sesión y obtención del token.

Lecturas (Protegidos con Token)
GET /items: Listar todas las lecturas del usuario.
POST /items: Registrar nueva bibliografía.
PUT /items/:id: Actualizar estado, notas o relevancia.
DELETE /items/:id: Eliminar un registro.

📖 Estructura de una Lectura
Cada registro bibliográfico cuenta con:
Título y Autor.
Estado: Pendiente / Leída.
Relevancia: Descripción del aporte al proyecto.
Notas: resumen o recordatorio de partes importantes
Notas: Resúmenes u observaciones.

