const { Pool } = require('pg');
 
const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
})
 
module.exports = {
  query: (text, params) => pool.query(text, params)
}
