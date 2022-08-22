import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

const Genero = sequelize.define("Genero", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  peliAsoc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Genero;