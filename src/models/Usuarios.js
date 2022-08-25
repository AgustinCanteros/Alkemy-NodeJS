import { DataTypes } from "../../node_modules/sequelize/index.js";
import { sequelize } from "../database/db.js";

export const Usuario = sequelize.define("usuario", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.UUIDV4,
    default: sequelize.UUIDV4,
    primaryKey: true,
  },
});
