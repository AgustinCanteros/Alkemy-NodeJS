import e from "express";
import Usuario from "../models/Usuarios.js";

export const usuarioLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findAll({
      where: {
        email,
      },
    });

    if (!usuario[0])
      return res
        .status(404)
        .json({ message: "No existe un usuario registrado con ese email" });

    const compPass = await Usuario.compararPassword(
      password,
      usuario[0].dataValues.password
    );

    if (compPass) {
      res.status(200).json({ message: "Has iniciado sesion con exito" });
    } else {
      res.status(500).json({ message: "La contraseña es incorrecta" });
    }
  } catch (error) {
    res.json({ message: "Error al iniciar sesion" });
  }
};

export const usuarioRegister = async (req, res) => {
  try {
    const { email, password } = req.body;
    const compEmail = await Usuario.findAll({
      where: {
        email,
      },
    });
    if (compEmail.length > 0) {
      res.json({ message: "El email ya se encuentra registrado" });
    } else {
      await Usuario.create({
        email,
        password: await Usuario.encriptarPassword(password),
      });
      res.json({ message: "Te has registrado con exito" });
    }
  } catch (error) {
    res.json({ message: "Error al registrarse" });
  }
};
