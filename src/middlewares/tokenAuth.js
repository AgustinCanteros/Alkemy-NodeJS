import jwt from "jsonwebtoken";
import config from "../config.js";
import Usuario from "../models/Usuarios.js";

export const tokenAuth = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const tokenDes = jwt.verify(token, config.SECRET);
    const usuario = await Usuario.findAll({
      where: {
        email: tokenDes.id,
      },
    });
    if (!usuario)
      return res.status(404).json({ message: "Token de acceso no valido" });
    next();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Token de acceso no recibido o no es valido" });
  }
};
