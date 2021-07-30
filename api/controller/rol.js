const db = require("../config/connectDB");
// const Roles = require('../model/roles');

const registerRol = async (req, res) => {
  try {
    const roles = {
      name: req.body.name,
    };
    console.log(roles);
    const rol = await db.Roles.create(roles);
    res.json(rol);
  } catch (error) {
    console.log(error);
  }
};

// const getRols = async (req, res) => {
//   try {
//     db.Roles.findAll().then((data) => {
//       res.json(data);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getRols = async (req, res ) => {
//     try {
//         const email = req.body.email
//         const UserDatabase = await db.users.findOne({
//             where: {
//               email: email,
//             },
//           });
//           console.log(UserDatabase)
//     } catch (error) {
//         console.log(error)
//     }
// }

const getRols =  async (req, res) => {
    try {
        const roles = await db.Roles.findAll();
        console.log(JSON.stringify(roles,null,2))
        res.json(roles)
        
    } catch (error) {
        console.log(error)
    }
}

const updateRols = async(req, res) => {
    try {
        const nombre = req.body.name;
        const id = req.params.id;
    // const id = req.body.id;
        const rol = await db.Roles.findOne({where:{
        id: id
        }})
    // rol.id = id;
    
        rol.name=nombre;
        await rol.save()
        res.json(rol)
    } catch (error) {
        console.log(error)
    }
}

const deleteRol = async( req,res) =>{
    try {
        const id = req.params.id;
        const rol = await db.Roles.findOne({
            where:{
                id: id
            }
        });
        await rol.destroy();
        res.json({msg: "rol destruido satisfactoriamente"})
    } catch (error) {
        console.log("ha sucedido un desagradabe error", error)
    }
}

const getOneRol = async (req, res) => {
    try {        
        const id = req.params.id;
        const rol = await db.Roles.findOne({
            where:{
                id: id
            }
        });
        res.json(rol)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
  registerRol,
  getRols,
  updateRols,
  deleteRol,
  getOneRol
};