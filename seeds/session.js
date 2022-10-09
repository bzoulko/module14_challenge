const { Session } = require('../models');

const data = [

  {
    expires: 'data',
    data: '',
    createdAt: '',
    updatedAt: ''
  },

];

const seeds = () => Session.bulkCreate(data);

module.exports = seeds;
