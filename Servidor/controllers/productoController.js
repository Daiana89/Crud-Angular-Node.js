const Producto = require("../models/Producto");


//CREAR PRODUCTO
exports.CrearProducto = async (req,res) => {
    try {
        //Creo un producto
        let producto;
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
}
//ELIMINAR EDITAR
exports.actualizarProducto = async (req, res) =>{
    try {

        const { nombre, categoria, ubicacion , precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'No existe un producto' })
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await  Producto.findOneAndUpdate({_id: req.params.id}, producto, {new:true}); //actualizamos con el nuevo producto
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }

}
//OBTENER PRODUTO
exports.obtenerProducto = async (req,res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'No existe un producto' })
        }

        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
}
//ELIMINAR PRODUCTO
exports.eliminarProducto = async (req,res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'No existe un producto' })
        }

        //de esta manera eliminamos el producto
        await Producto.findOneAndDelete({ _id: req.params.id })
        
        res.json({msg: 'Producto eliminado con exito'});
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
}
