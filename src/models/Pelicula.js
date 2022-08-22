import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Personaje } from "./Personaje.js";

export const Pelicula = sequelize.define("Pelicula", {
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

export const Personaje_Ap = sequelize.define("personaje_app", {
  role: DataTypes.STRING,
});
Personaje.belongsToMany(Pelicula, { through: Personaje_Ap });
Pelicula.belongsToMany(Personaje, { through: Personaje_Ap });