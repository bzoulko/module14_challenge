const seedComments = require('./comments');
const seedPosts = require('./posts');
const seedSessions = require('./session');
const seedUsers = require('./user');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedComments();
  console.log('\n----- COMMENT SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POST SEEDED -----\n');

  await seedSessions();
  console.log('\n----- SESSION SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USER SEEDED -----\n');

  process.exit(0);
};

seedAll();
