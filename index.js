const express = require('express');
const cursosRoutes = require('./routes/cursos_routes'); // Importa las rutas de cursos
const usuariosRoutes = require('./routes/usuarios_routes'); // Importa las rutas de usuarios

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Integrar las rutas de cursos
app.use('/api/cursos', cursosRoutes);

// Integrar las rutas de usuarios
app.use('/api/usuarios', usuariosRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



