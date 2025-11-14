'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [fotos, fotos_metadata] = await queryInterface.sequelize.query('SELECT id FROM fotos;')
    let [etiquetas, etiquetas_metadata] = await queryInterface.sequelize.query('SELECT id FROM etiquetas;')

    for(let i = 0; i < 10; i++){
      await queryInterface.bulkInsert('fotoetiquetas', [
          {
            foto_id: fotos[Math.floor(Math.random() * fotos.length)].id,
            etiqueta_id: etiquetas[Math.floor(Math.random() * etiquetas.length)].id,
            createdAt: new Date(),
            updatedAt: new Date()
          }] , {}); 
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fotoetiquetas', null, {});
  }
};
