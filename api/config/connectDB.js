require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.DB_HOST,
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
const Users = require("../model/users")(sequelize, Sequelize);
const Roles = require("../model/roles")(sequelize, Sequelize);
Roles.hasMany(Users);
Users.belongsTo(Roles);
db.users = Users;
db.Roles = Roles;

module.exports = db;
