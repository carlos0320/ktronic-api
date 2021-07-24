
module.exports = (app) => {
    const users = require("../controller/users");
    var router = require("express").Router();
    router.post("/register", users.registerUser);
    router.post("/login", users.login);
    app.use("/api/users", router);
  };
  