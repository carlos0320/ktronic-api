require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: "postgres",
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  dialect: "postgres",
});

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
