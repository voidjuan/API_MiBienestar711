'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rols",
      [
        {
          name: "Administrador",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Coordinador",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Instructor",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Aprendiz",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rols', null, {});
  }
};
