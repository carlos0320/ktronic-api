module.exports = (app) => {
    const roles = require("../controller/rol");
    var router = require("express").Router();

    router.post("/rol", roles.registerRol);
    router.get("/listRoles", roles.getRols);
    router.get("/listOneRol/:id", roles.getOneRol);
    router.put("/updateRol/:id", roles.updateRols);
    router.delete("/deleteRol/:id", roles.deleteRol);
    

    app.use("/api/roles", router);
}