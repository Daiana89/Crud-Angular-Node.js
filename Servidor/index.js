const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creo el servidor
const app = express();

// Conecto a la base de datos
conectarDB();
app.use(cors()),

//configuro middleware
app.use(express.json());


// Configuro las rutas
app.use('/api/productos', require('./routes/producto'));

// Levanto el servidor
app.listen(5000, () => {
    console.log('El servidor está funcionando en el puerto 5000');

});
