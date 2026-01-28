# Un capítulo a la vez: Gestión de Lecturas Académicas 📚✍️

Este proyecto es una **API REST** desarrollada en JavaScript diseñada específicamente para acompañar el proceso de escritura de tesis y tesinas. Su función principal es permitir que las y los estudiantes organicen su bibliografía de manera estratégica, diferenciando entre lecturas pendientes y realizadas, evaluando la relevancia de cada texto para su investigación. En un futuro se espera poder desarrollar mas herramientas para el proyecto, pero por ahora solo nos enfocaremos en la bibliografia.

## 🛠️ Tecnologías utilizadas

* **Node.js & Express.js:** Motor del servidor y manejo de rutas.
* **bcrypt:** Para el cifrado de seguridad de las contraseñas de los usuarios.
* **jsonwebtoken (JWT):** Implementación de tokens para proteger la información del tesista.
* **cors:** Para permitir la comunicación fluida entre el frontend y el backend.
* **dotenv:** Gestión de variables de entorno (seguridad de claves).
* **Bootstrap:** Framework utilizado para un diseño de interfaz limpio y académico.

---

## 📁 Estructura del Proyecto

1. **index.js:** Es el corazón del servidor. Configura los middlewares globales, conecta las rutas y define el puerto de ejecución (configurado para adaptarse dinámicamente a entornos como Render).
   
2. **Rutas (userRoutes.js y lecturaRoutes.js):**
   * **Usuarios:** Maneja el registro y acceso.
   * **Lecturas:** Gestiona el CRUD bibliográfico. Las rutas de lecturas están **protegidas**: requieren que el usuario esté logueado y presente un token válido.
   * *NOTA:* Para pruebas en **Postman**, se debe incluir el token en la pestaña 'Authorization' bajo el formato `Bearer <token>`.

3. **Controladores y Modelos (lecturaController.js y lecturaModel.js):** Se encargan de la lógica de negocio y la manipulación de datos:
   * **Obtener lecturas (getLecturas):** Lista todo el material bibliográfico guardado por el usuario.
   * **Añadir lectura (addLectura):** Registra un nuevo libro o artículo. 
     * *IMPORTANTE:* El campo **Relevancia y Notas** permite texto libre para que el estudiante explique por qué este autor es clave o incluya citas y resúmenes.
   * **Actualizar y Eliminar:** Permite editar notas o descartar material que ya no se considera necesario.
   * **Autenticación:** Funciones de registro y login para asegurar la privacidad de cada tesista.

4. **Middlewares (authMiddleware.js):** Filtro de seguridad que verifica la identidad del usuario mediante el token.

5. **Servicios (jwtService.js):** Lógica especializada para la gestión de tokens. Se encarga de la creación (sign) y validación de los JSON Web Tokens, manteniendo el código del controlador más limpio y organizado.

6. **Data (users.json y lecturas.json):** El sistema utiliza persistencia en archivos JSON, simulando una base de datos local que mantiene la información a salvo.

7. **Public (public/):** Contiene la interfaz de usuario (HTML y CSS). El archivo `script.js` consume la API y refleja los cambios mediante **Fetch**.

---

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:** `git clone https://github.com/ItatiChT/Un-capitulo-a-la-vez.git`
2. **Instalar dependencias:** `npm install`
3. **Configurar entorno:** Crear un archivo `.env` con las variables `PORT` y `JWT_SECRET`.
4. **Ejecutar el servidor:** `npm start`

---

## 🛣️ Endpoints de la API

### Usuarios (Acceso Público)
* `POST /users/register`: Registro de nuevos tesistas.
* `POST /users/login`: Valida credenciales y devuelve el Token JWT.

### Lecturas (Acceso Protegido)
* `GET /items`: Recupera y lista las lecturas del usuario autenticado.
* `POST /items`: Crea un nuevo registro bibliográfico.
* `PUT /items/:id`: Edita estado, notas o relevancia.
* `DELETE /items/:id`: Elimina definitivamente un registro.

---

## 📖 Estructura de una Lectura

| Campo | Descripción |
| :--- | :--- |
| **Título y Autor** | Identificación básica del material académico. |
| **Estado** | Indicador binario: **Pendiente** o **Leída**. |
| **Relevancia** | Aporte específico a la investigación (ej: capítulos clave o recomendaciones de docentes). |
| **Notas** | Espacio para resúmenes, citas textuales u observaciones generales. |
| **Fecha** | Registro automático del momento en que se añadió el material. |

---

## 💡 Nota sobre Seguridad
Todas las rutas bajo el prefijo `/items` cuentan con un middleware de autenticación que verifica el encabezado `Authorization: Bearer <token>`, asegurando que los registros sean privados.

---

## 🌐 Demo en vivo
Puedes acceder al proyecto aquí:  
👉 [https://un-capitulo-a-la-vez-1.onrender.com/](https://un-capitulo-a-la-vez-1.onrender.com/)

**Prueba rápida:**
* **Usuario:** `usuariodeprueba`
* **Contraseña:** `contraseña123`  
*(O crea tu propia cuenta para una experiencia completa).*