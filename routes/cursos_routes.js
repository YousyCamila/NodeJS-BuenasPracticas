const express = require('express');
const cursoController = require('../controllers/cursos'); // Importa el controlador
const router = express.Router(); // Define el enrutador

// Listar todos los cursos activos
router.get('/', cursoController.listarCursosActivos);

// Obtener curso por Id
router.get('/:id', cursoController.obtenerCursoPorId);

// Obtener los usuarios para un curso
router.get('/:id/usuarios', cursoController.obtenerUsuariosPorCurso);

// Crear un curso
router.post('/', cursoController.crearCurso);

// Crear Colección de Cursos
router.post('/coleccion', cursoController.guardarColeccionCursos);

// Actualizar curso
router.put('/:id', cursoController.actualizarCurso);

// Eliminar Curso
router.delete('/:id', cursoController.desactivarCurso);

module.exports = router;
