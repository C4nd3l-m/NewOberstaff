# Oberstaff Redesign – Fullstack Web App 🌐

Rediseño completo del sitio [oberstaff.com](https://oberstaff.com) con tecnologías modernas, landing responsive y formulario funcional con persistencia de datos.

---

## 🚀 Tecnologías utilizadas

### 🧩 Frontend
- ⚛️ **Next.js 14** – Framework React para aplicaciones web modernas.
- 🟦 **TypeScript** – Tipado estático para mejorar la mantenibilidad.
- 🎨 **Tailwind CSS** – Estilado rápido y moderno con clases utilitarias.
- 📝 **React Hook Form** + **Zod** – Validación eficiente de formularios.
- 📦 **React Icons** – Iconografía SVG.
- 🔤 **Google Fonts** – Tipografías *Poppins* e *Inter*.

### 🖥️ Backend
- 🟢 **Node.js** + **Express.js** – API REST sencilla y modular.
- 🍃 **MongoDB** + **Mongoose** – Base de datos NoSQL con ODM.
- 🔐 **Dotenv** – Variables de entorno seguras.

---

## ✨ Funcionalidades principales

- ✅ Diseño 100 % responsive y moderno.
- ✅ Formulario funcional con validaciones frontend/backend.
- ✅ Persistencia de datos en MongoDB.
- ✅ Feedback visual de éxito y error.
- ✅ Footer institucional con enlaces, redes sociales y política de privacidad.
- ✅ Integración de tipografías y colores institucionales.

---

## ⚙️ Instalación local

1. **Clonar el repositorio**
```bash
git clone https://github.com/C4nd3l-m/NewOberstaff.git
cd NewOberstaff


#Backend
cd backend
npm install
cp .env.example .env
# Agregar tu URI de MongoDB en el archivo .env
npm run dev

#Frontend
cd ../frontend
npm install
npm run dev
Abrir en el navegador: http://localhost:3000

📮 Variables de entorno necesarias
Backend (.env):

PORT=4000
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/oberstaff 
```
----

🧪 Buenas prácticas
Código organizado por responsabilidades.

Validaciones robustas de datos y errores.

Tipado estricto con TypeScript.

👩‍💻 Autor
Candela Villaverde Olguín
Frontend & Fullstack Developer
📧 c4nd3l.m@gmail.com

📄 Licencia
Este proyecto fue desarrollado con fines evaluativos y educativos.
Todos los derechos sobre el contenido original de Oberstaff pertenecen a su respectiva empresa.
