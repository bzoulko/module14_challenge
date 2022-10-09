const { Post } = require('../models');

const data = [

  {
    title: '',
    body: 'data',
    createdAt: '',
    updatedAt: '',
    userId: ''
  },

];

const seeds = () => Post.bulkCreate(data);

module.exports = seeds;
