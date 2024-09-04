const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err.message);
    process.exit(1); // Salir del proceso en caso de error
  }
};

module.exports = connectDB;

