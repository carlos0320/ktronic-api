const db = require("../config/connectDB");
const UserModel = require("../model/users");

module.exports = {
  registerUser: async function (req, res) {
    try {
      const users = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        roleId: req.body.id_role//TODO: Borrar la variable especifica de Mabel, para no violar derechos de autor y declarar las otras tablas

      };

      console.log(users)

      const user = await db.users.create(users);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  login: async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const UserDatabase = await db.users.findOne({
      where: {
        email: email,
      },
      include:db.Roles
    });
    console.log("El arreglo", !UserDatabase);
    if (!UserDatabase) {
      res.status(404).json({ message: "no se encontro el usuario" });
    }

    if (password === UserDatabase.password) {
      console.log(UserDatabase);
      res.json(UserDatabase);
    } else {
      res
        .status(404)
        .json({ message: "no se ha encontrado usuario y/o contraseña" });
    }
  },
};
