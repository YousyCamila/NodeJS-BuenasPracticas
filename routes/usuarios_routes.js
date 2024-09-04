const express = require('express');
const usuarioController = require('../controllers/usuarios'); // Importa los controladores
const router = express.Router();

// Listar usuarios activos
router.get('/', usuarioController.listarUsuarioActivos);

// Listar cursos del usuario
router.get('/:usuarioId/cursos', usuarioController.listarCursosDeUsuario);

// Crear un usuario sin cursos (para el frontend)
router.post('/', usuarioController.crearUsuario);

// Crear un usuario con cursos (para el frontend en la sección Home)
router.post('/:email/cursos', usuarioController.agregarCursosAUsuario);

// Guardar una colección de usuarios
router.post('/coleccion', usuarioController.guardarColeccionUsuarios);

// Actualizar un usuario
router.put('/:email', usuarioController.actualizarUsuario);

// Eliminar usuario
router.delete('/:email', usuarioController.desactivarUsuario);

module.exports = router;
