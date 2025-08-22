'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Deportes",
          description: "Brindar acompañamiento en las actividades fisicas realizadas",
          image: "https://a.files.bbci.co.uk/worldservice/live/assets/images/2015/12/28/151228155657_personalidad_deporte_304x171_thinkstock_nocredit.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Agricultura",
          description: "Brindar acompañamiento y educacion necesaria para realizar actividades agricolas",
          image: "https://latinpyme.com/wp-content/uploads/2024/11/Agro_ssotenible.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Programacion",
          description: "Brindar apoyo y herramientas en los diversos proyectos tecnologicos de los aprendices SENA",
          image: "https://i.blogs.es/3818bd/programacion/450_1000.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Salud y Cuidado",
          description: "Brindar acompañamiento a los aprendices en todo tipo de actividades que vayan de la mano con la sanidad.",
          image: "https://asisken.com/wp-content/uploads/2025/04/Dia-mundial-de-la-salud.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Emprendimiento",
          description: "Fomentar el desarrollo de ideas de negocio y proyectos productivos entre los aprendices.",
          image: "https://pqs.pe/wp-content/uploads/2020/09/working-g0cb249c4a_640.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cultura",
          description: "Promover actividades artísticas, musicales y culturales para el desarrollo integral de los aprendices.",
          image: "https://www.ecologistasenaccion.org/wp-content/uploads/2019/10/img99.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gastronomía",
          description: "Impulsar el aprendizaje y la práctica de la cocina nacional e internacional.",
          image: "https://img.freepik.com/vector-premium/comida-nutricional-delicioso-vegetal_18591-17152.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Medio Ambiente",
          description: "Fomentar la conciencia ambiental y la participación en proyectos ecológicos.",
          image: "https://www.grupobillingham.com/blog/wp-content/uploads/2022/05/dia-del-ambiente.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Innovación",
          description: "Estimular la creatividad y el desarrollo de soluciones tecnológicas innovadoras.",
          image: "https://www.euroresidentes.com/empresa/exito-empresarial/wp-content/uploads/sites/15/2014/04/tipos-innovacion-empresarial.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bienestar Social",
          description: "Apoyar el desarrollo personal y social de los aprendices a través de actividades de integración y apoyo psicológico.",
          image: "https://coofipopular.com/wp-content/uploads/2023/09/img.-bienestar-social-2023.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
