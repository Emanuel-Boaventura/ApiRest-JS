"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn('alunos', 'altura', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
