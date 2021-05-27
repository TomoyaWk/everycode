'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const now = new Date();
      await queryInterface.bulkInsert('Users', [
        { id: 1, name: 'John Doe', pass:"password", mail: "test@example.com", age: 24, createdAt: now, updatedAt: now },
        { id: 2, name: 'John Doe2', pass:"password", mail: "test@example.com", age: 24, createdAt: now, updatedAt: now},
        { id: 3, name: 'John Doe3', pass:"password", mail: "test@example.com", age: 24, createdAt: now, updatedAt: now},
        { id: 4, name: 'John Doe4', pass:"password", mail: "test@example.com", age: 24, createdAt: now, updatedAt: now} ,
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
