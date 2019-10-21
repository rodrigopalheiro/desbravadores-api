'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('honor_categories', [
      { abbr: 'AD', name: 'ADRA', created_at: new Date(), updated_at: new Date() },
      { abbr: 'HM', name: 'Artes e Habilidades Manuais', created_at: new Date(), updated_at: new Date() },
      { abbr: 'AA', name: 'Atividades Agrícolas e Afins', created_at: new Date(), updated_at: new Date() },
      { abbr: 'AM', name: 'Atividades Missionárias e Comunitárias', created_at: new Date(), updated_at: new Date() },
      { abbr: 'AP', name: 'Atividades Profissionais', created_at: new Date(), updated_at: new Date() },
      { abbr: 'AR', name: 'Atividades Recreativas', created_at: new Date(), updated_at: new Date() },
      { abbr: 'CS', name: 'Ciência e Saúde', created_at: new Date(), updated_at: new Date() },
      { abbr: 'EN', name: 'Estudos da Natureza', created_at: new Date(), updated_at: new Date() },
      { abbr: 'HD', name: 'Habilidades Domésticas', created_at: new Date(), updated_at: new Date() },
      { abbr: 'ME', name: 'Mestrados', created_at: new Date(), updated_at: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('honor_categories', null, {});
  }
};