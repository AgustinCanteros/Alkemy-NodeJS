import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Pelicula } from "./Pelicula.js";

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
});

export const Peliculas_personajes = sequelize.define("pelicula_personajes", {});
Pelicula.belongsToMany(Personaje, { through: Peliculas_personajes });
Personaje.belongsToMany(Pelicula, { through: Peliculas_personajes });
