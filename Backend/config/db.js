const { Sequelize } = require('sequelize');
// Crear conexión con PostgreSQL usando Sequelize
const sequelize = new Sequelize('cardetails', 'postgres', '1234', {
  host: 'localhost',  // Dirección del servidor de base de datos
  dialect: 'postgres', // Usamos PostgreSQL
  logging: false, // Desactivar los logs de SQL en consola
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
  });

module.exports = sequelize;