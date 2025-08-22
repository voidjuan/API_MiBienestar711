'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          name: "Torneo de Fútbol SENA",
          description: "Competencia interna entre aprendices para fomentar el trabajo en equipo y la actividad física.",
          startDate: new Date(2025, 8, 15, 9, 0, 0),
          endDate: new Date(2025, 8, 15, 17, 0, 0),
          state: "Activo",
          maxCapacity: 100,
          categoryId: 1, // Deportes
          userId: 3,     // coord_andres
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Huerta Urbana Sostenible",
          description: "Capacitación en técnicas de agricultura urbana para los aprendices.",
          startDate: new Date(2025, 8, 20, 10, 0, 0),
          endDate: new Date(2025, 8, 20, 14, 0, 0),
          state: "Activo",
          maxCapacity: 40,
          categoryId: 2, // Agricultura
          userId: 4,     // coord_paola
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hackathon SENA 2025",
          description: "Competencia de 24 horas para desarrollar soluciones innovadoras en software.",
          startDate: new Date(2025, 10, 5, 8, 0, 0),
          endDate: new Date(2025, 10, 6, 8, 0, 0),
          state: "Activo",
          maxCapacity: 60,
          categoryId: 3, // Programación
          userId: 3,     // coord_andres
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jornada de Primeros Auxilios",
          description: "Taller práctico de primeros auxilios y reanimación cardiopulmonar.",
          startDate: new Date(2025, 8, 25, 14, 0, 0),
          endDate: new Date(2025, 8, 25, 18, 0, 0),
          state: "Activo",
          maxCapacity: 50,
          categoryId: 4, // Salud y Cuidado
          userId: 4,     // coord_paola
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Festival Gastronómico SENA",
          description: "Presentación de platos típicos e internacionales preparados por aprendices.",
          startDate: new Date(2025, 11, 10, 12, 0, 0),
          endDate: new Date(2025, 11, 10, 18, 0, 0),
          state: "Activo",
          maxCapacity: 80,
          categoryId: 7, // Gastronomía
          userId: 3,     // coord_andres
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Feria de Innovación Tecnológica",
          description: "Exposición de proyectos innovadores desarrollados por aprendices.",
          startDate: new Date(2025, 11, 20, 9, 0, 0),
          endDate: new Date(2025, 11, 20, 17, 0, 0),
          state: "Activo",
          maxCapacity: 70,
          categoryId: 9, // Innovación
          userId: 4,     // coord_paola
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Events", null, {});
  },
};