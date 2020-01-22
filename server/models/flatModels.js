const { Pool } = require('pg');

const PG_URI = 'postgres://htvwnoto:qLJl6BbKkJ2RydSv-ldHrOVePebZPAHJ@rajje.db.elephantsql.com:5432/htvwnoto';

const pool = new Pool({
  connectionString: PG_URI,
});

// Nicole add some notes about database here

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};