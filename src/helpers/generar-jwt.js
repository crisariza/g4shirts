const jwt = require("jsonwebtoken");

const { User } = require("../db");

const generarJWT = async (uid = "") => {
  const user = await User.findOne({
    // include: [
    // {
    //     model: Role,
    // },
    // ],
    where: { id: uid },
  });

  return new Promise((resolve, reject) => {
    const { id, name, email, surname, roleId } = user;

    const payload = {
      id,
      email,
      role: roleId === 2 ? "user" : "admin",
      name,
      surname,
      google: true,
    };

    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: "10m",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generarJWT,
};
