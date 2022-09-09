import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Pelicula = sequelize.define("pelicula", {
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
