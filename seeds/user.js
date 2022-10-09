const { User } = require('../models');

const data = [

  {
    username: 'data',
    password: ''
  },

];

const seeds = () => User.bulkCreate(data);

module.exports = seeds;
