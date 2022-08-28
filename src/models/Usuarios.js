import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import bcrypt from "bcryptjs";

const Usuario = sequelize.define("usuario", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Usuario.encriptarPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

Usuario.compararPassword = async (webPassword, password) => {
  return await bcrypt.compare(webPassword, password);
};

export default Usuario;
