import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

const Serie = sequelize.define("Serie", {
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  personajesAsoc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Serie;