const express = require('express');
const connectDB = require('./config/db.config');
const notaRoutes = require('./routes/nota.routes');

// Conectar a la base de datos
connectDB();

const app = express();
app.use(express.json()); // Para procesar el body en formato JSON

// Usar las rutas de nota
app.use('/api', notaRoutes);

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
