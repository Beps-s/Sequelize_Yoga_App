'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('ArticleTags', [{
        articleId:37,
        tagId:15,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId:37,
        tagId:16,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId:39,
        tagId:15,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId:39,
        tagId:17,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId:38,
        tagId:18,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId:38,
        tagId:19,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId:38,
        tagId:20,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ArticleTags');
  }
};