# Gestión de Eventos API

Este proyecto es una aplicación backend desarrollada con Node.js y TypeScript, que utiliza MongoDB para la persistencia de datos. Está diseñado para permitir a los usuarios gestionar eventos, inscribirse en ellos, y manejar la autenticación y autorización de usuarios con diferentes roles.

## Características

- **Registro y Autenticación de Usuarios:** Los usuarios pueden registrarse y autenticarse en la aplicación.
- **Gestión de Eventos:** Los usuarios pueden crear, listar, modificar y eliminar eventos.
- **Inscripción a Eventos:** Los usuarios pueden inscribirse a eventos disponibles.
- **Roles y Permisos:** Soporta diferentes roles de usuarios (asistente, organizador) con permisos específicos.

## Tecnologías Utilizadas

- **Node.js:** Entorno de ejecución para JavaScript en el servidor.
- **TypeScript:** Superset de JavaScript que añade tipos estáticos.
- **MongoDB:** Base de datos NoSQL para la persistencia de datos.
- **Express:** Framework de Node.js para aplicaciones web.
- **JWT:** Tokens de JSON para la autenticación y autorización de usuarios.
- **Bcrypt:** Librería para hashing de contraseñas.
- **Zod:** Librería para validación de datos.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `models/`: Define los modelos de datos para usuarios y eventos.
- `services/`: Lógica de negocio para manejar las operaciones CRUD.
- `controllers/`: Controladores para manejar las solicitudes y respuestas HTTP.
- `middlewares/`: Middlewares para la autenticación, autorización y validación de datos.
- `schemas/`: Esquemas Zod para la validación de datos.
- `routes/`: Rutas de la aplicación Express.

## Cómo Iniciar

Para configurar y ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:

git clone https://github.com/your-username/event-management-api.git


2. Instala las dependencias:

cd event-management-api
npm install


3. Ejecuta el servidor:

npm run start


## Documentación de la API

La API soporta las siguientes operaciones:

- **Usuarios**
- Registro y autenticación de usuarios.
- Obtención de la lista de usuarios (solo admin).

- **Eventos**
- Creación, listado, edición y eliminación de eventos.
- Inscripción a eventos.

Las rutas específicas y ejemplos de uso se encuentran documentadas en el archivo `Postman_collection.json` incluido en el repositorio.

## Desafíos y Elementos Pendientes

- Integración de pruebas unitarias y de integración.
- Mejora en el sistema de logging para depuración y monitoreo.
- Implementación de un sistema de notificaciones para eventos próximos.

