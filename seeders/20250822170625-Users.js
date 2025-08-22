'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        // Administradores
        {
          username: "admin_carlos",
          email: "carlos.martinez@empresa.com",
          password: "Admin123*",
          phone: "3105678921",
          birthday: "1985-03-15",
          document: "1023456789",
          gender: "Masculino",
          state: "Activo",
          rolId: 1, // Administrador
          passwordResetToken: null,
          passwordResetExpires: new Date(2025, 11, 24, 12, 0, 0),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "admin_laura",
          email: "laura.gomez@empresa.com",
          password: "Admin456*",
          phone: "3206789123",
          birthday: "1990-07-22",
          document: "1034567890",
          gender: "Femenino",
          state: "Activo",
          rolId: 1, // Administrador
          passwordResetToken: null,
          passwordResetExpires: new Date(2025, 11, 25, 12, 0, 0),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Coordinadores
        {
          username: "coord_andres",
          email: "andres.rojas@empresa.com",
          password: "Coord123*",
          phone: "3113456789",
          birthday: "1988-05-10",
          document: "1045678901",
          gender: "Masculino",
          state: "Activo",
          rolId: 2, // Coordinador
          passwordResetToken: null,
          passwordResetExpires: new Date(2025, 11, 26, 12, 0, 0),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "coord_paola",
          email: "paola.mendez@empresa.com",
          password: "Coord456*",
          phone: "3009876543",
          birthday: "1992-12-01",
          document: "1056789012",
          gender: "Femenino",
          state: "Activo",
          rolId: 2, // Coordinador
          passwordResetToken: null,
          passwordResetExpires: new Date(2025, 11, 27, 12, 0, 0),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Instructores
        {
          username: "inst_juan",
          email: "juan.perez@empresa.com",
          password: "Inst123*",
          phone: "3124567890",
          birthday: "1983-09-05",
          document: "1067890123",
          gender: "Masculino",
          state: "Activo",
          rolId: 3, // Instructor
          passwordResetToken: null,
          passwordResetExpires: new Date(2025, 11, 28, 12, 0, 0),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "inst_maria",
          email: "maria.fernandez@empresa.com",
          password: "Inst456*",
          phone: "3012345678",
          birthday: "1987-11-18",
          document: "1078901234",
          gender: "Femenino",
          state: "Activo",
          rolId: 3, // Instructor
          passwordResetToken: null,
          passwordResetExpires: new Date(2025, 11, 29, 12, 0, 0),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Aprendices
        {
          username: "aprendiz_diego",
          email: "diego.sanchez@correo.com",
          password: "Apren123*",
          phone: "3007654321",
          birthday: "2002-04-12",
          document: "1089012345",
          gender: "Masculino",
          state: "Activo",
          rolId: 4, // Aprendiz
          passwordResetToken: null,
          passwordResetExpires: new Date(2025, 11, 30, 12, 0, 0),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "aprendiz_valentina",
          email: "valentina.lopez@correo.com",
          password: "Apren456*",
          phone: "3023456789",
          birthday: "2003-08-20",
          document: "1090123456",
          gender: "Femenino",
          state: "Activo",
          rolId: 4, // Aprendiz
          passwordResetToken: null,
          passwordResetExpires: new Date(2025, 11, 26, 12, 0, 0),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};