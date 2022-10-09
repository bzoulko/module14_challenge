const { Comment } = require('../models');

const data = [

  {
    body: 'data',
    createdAt: '',
    updatedAt: '',
    postId: '',
    userId: ''
  },

];

const seeds = () => Comment.bulkCreate(data);

module.exports = seeds;
