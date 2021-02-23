const monk = require('monk');
const connectionString = process.env.MONGO_URI || 'localhost/messageboard';
const db = monk(connectionString);

module.exports = db;

