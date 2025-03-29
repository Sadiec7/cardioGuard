const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB establecida');
  } catch (err) {
    console.error('Error de conexión a MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;