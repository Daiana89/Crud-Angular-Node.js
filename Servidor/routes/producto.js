const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
// Definir rutas
router.get('/', productoController.obtenerProductos );//obtenemos los producto desde la base de datos

router.post('/', productoController.CrearProducto);// creamos y enviamos producto a la base de datos

router.put('/:id', productoController.actualizarProducto);// editar producto

router.get('/:id', productoController.obtenerProducto );// obtener producto

router.delete('/:id', productoController.eliminarProducto );// eliminar producto



module.exports = router;
