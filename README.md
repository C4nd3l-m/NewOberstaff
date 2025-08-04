##🌐 Oberstaff Redesign – Fullstack Web App
Rediseño completo del sitio oberstaff.com con tecnologías modernas. Esta solución incluye una landing page responsive, optimizada para una mejor experiencia de usuario, y   un formulario funcional con persistencia de datos.

🚀 Tecnologías utilizadas
🧩 Frontend
⚛️ Next.js 14 – Framework React moderno para aplicaciones web.

🟦 TypeScript – Tipado estático para mayor escalabilidad y mantenibilidad.

🎨 Tailwind CSS – Estilado rápido y moderno mediante clases utilitarias.

📝 React Hook Form + Zod – Validación eficiente y controlada de formularios.

📦 React Icons – Iconografía SVG personalizable.

🔤 Google Fonts – Tipografías personalizadas (Poppins e Inter).

🖥️ Backend
🟢 Node.js + Express.js – API REST modular y sencilla.

🍃 MongoDB + Mongoose – Base de datos NoSQL para persistencia de datos.

🔐 Dotenv – Manejo seguro de variables de entorno.

✨ Funcionalidades principales
✅ Rediseño visual con enfoque moderno y profesional.

✅ Diseño 100% responsive adaptable a todos los dispositivos.

✅ Formulario de contacto funcional con:

Validaciones frontend (Zod + React Hook Form).

Validaciones backend (middleware de Express).

Persistencia de los datos en MongoDB.

Mensajes visuales de éxito y error para el usuario.

✅ Footer institucional con enlaces, redes sociales y política de privacidad.

✅ Integración de colores y tipografías alineadas a la identidad de la empresa.


⚙️ Instalación local

# Clonar el repositorio
```
git clone https://github.com/C4nd3l-m/NewOberstaff.git
cd NewOberstaff

🔧 Backend
cd backend
npm install
cp .env.example .env
npm run dev

🎨 Frontend
cd ../frontend
npm install
npm run dev
Abrir en el navegador: http://localhost:3000

📮 Variables de entorno necesarias
Archivo .env para backend:
PORT=4000
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/oberstaff
# Reemplazar MONGO_URI con tu cadena de conexión de MongoDB
Los datos enviados desde el formulario de contacto se almacenan en una base de datos MongoDB a través de una API REST construida con Express y Mongoose.
```
🧪 Buenas prácticas aplicadas
Código estructurado por responsabilidades (controllers, routes, services).

Validaciones robustas y mensajes de error claros.

Tipado estricto con TypeScript en el frontend.

Componentes reutilizables y diseño consistente.

Variables de entorno seguras y desacopladas del código fuente.

👩‍💻 Autor
Candela Villaverde Olguín
Frontend & Fullstack Developer
📧 c4nd3l.m@gmail.com

📄 Licencia
Este proyecto fue desarrollado con fines evaluativos y educativos.
Todos los derechos sobre el contenido original de Oberstaff pertenecen a su respectiva empresa.
