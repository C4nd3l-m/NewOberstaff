# NewOberstaff
# 🌐 Oberstaff Redesign — Fullstack Web Application

Este repositorio contiene el rediseño completo del sitio web [oberstaff.com](https://oberstaff.com), con una nueva arquitectura fullstack moderna basada en tecnologías actuales. Incluye una landing responsive, formulario funcional con validaciones y persistencia de datos.

## 🚀 Tecnologías utilizadas

### 🔧 Frontend

- **Next.js 14** – Framework React para aplicaciones web modernas.
- **TypeScript** – Tipado estático para mejorar la mantenibilidad.
- **Tailwind CSS** – Estilado rápido y moderno con clases utilitarias.
- **React Hook Form** – Manejo de formularios eficiente.
- **Zod** – Validación y tipado de datos del formulario.
- **React Icons** – Iconografía SVG para redes sociales.
- **Google Fonts** – Tipografías *Poppins* e *Inter* para identidad visual.

### ⚙️ Backend

- **Node.js** con **Express.js** – API REST sencilla y modular.
- **MongoDB** – Base de datos NoSQL para persistencia.
- **Mongoose** – ODM para definir esquemas y operaciones.
- **Dotenv** – Variables de entorno seguras.

### 🛡️ Validaciones y manejo de errores

- Validación de datos tanto en el **frontend** (con Zod) como en el **backend** (middleware personalizado).
- Middleware global para el manejo profesional de errores del servidor.

---

## 🖼️ Funcionalidades

- ✅ Diseño responsive y moderno adaptado a dispositivos móviles y escritorio.
- ✅ Formulario funcional para contacto de empresas interesadas.
- ✅ Almacenamiento de envíos en MongoDB.
- ✅ Feedback visual de éxito/error.
- ✅ Footer profesional con logos, política de privacidad y redes sociales.
- ✅ Tipografías y colores institucionales integrados.


## ⚙️ Instalación y uso

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/oberstaff-redesign.git
cd oberstaff-redesign
1. Backend
bash
Copiar
Editar
cd backend
npm install
cp .env.example .env
# Agregar tu URI de MongoDB en el archivo .env
npm run dev
2. Frontend
bash
Copiar
Editar
cd ../frontend
npm install
npm run dev
Abrir en navegador: http://localhost:3000

📮 Variables de entorno
Backend .env
ini
Copiar
Editar
PORT=4000
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/oberstaff
🧪 Testing y calidad
Código organizado por responsabilidades.

Validaciones robustas de datos y errores.

Buenas prácticas de accesibilidad (aria-label, links con rel="noopener noreferrer").

Tipado estricto con TypeScript.

👩‍💻 Autor
Candela Villaverde Olguín
Frontend & Fullstack Developer
📧 c4nd3l.m@gmail.com

📄 Licencia
Este proyecto fue desarrollado con fines evaluativos y educativos. Todos los derechos sobre el contenido original de Oberstaff pertenecen a su respectiva empresa.



