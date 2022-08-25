import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Personaje = sequelize.define("personaje", {
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  peso: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  historia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apariciones: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});