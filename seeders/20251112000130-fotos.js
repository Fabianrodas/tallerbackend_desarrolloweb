'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for(let i = 0; i < 10; i++) {
      await queryInterface.bulkInsert('fotos', [{
        titulo: 'fotos'+i,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        calificacion: (Math.random()*10).toFixed(2),
        ruta: 'public/images/foto'+i+'.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fotos', null, {});
  }
};
