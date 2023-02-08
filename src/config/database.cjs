const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
  timezone: 'America/Sao_Paulo',
}
