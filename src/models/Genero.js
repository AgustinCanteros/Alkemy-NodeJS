import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Pelicula } from "./Pelicula.js";

export const Genero = sequelize.define("genero", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  peliAsoc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export const Pelicula_gen = sequelize.define("pelicula_gen", {});
Pelicula.belongsToMany(Genero, { through: Pelicula_gen });
Genero.belongsToMany(Pelicula, { through: Pelicula_gen });
