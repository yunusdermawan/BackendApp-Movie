const { Pool } = require('pg');
 
const pool = new Pool({
  user: 'fazz_defined_user',
  host: 'localhost',
  database: 'fazz_yunus',
  password: '123',
  port: '5433'
});



module.exports = pool;