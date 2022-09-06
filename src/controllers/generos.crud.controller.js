import { Genero } from "../models/Genero.js";
import { Pelicula } from "../models/Pelicula.js";

export const getGeneros = async (req, res) => {
  try {
    const generos = await Genero.findAll({
      attributes: ["nombre", "imagen"],
      include: {
        model: Pelicula,
        attributes: ["titulo"],
        through: {
          attributes: [],
        },
      },
    });
    if (!generos[0])
      return res.json({
        message: "No hay ningun genero de pelicula en la base de datos",
      });
    res.json(generos);
  } catch (error) {
    res.send(error);
  }
};

export const createGeneros = async (req, res) => {
  const { nombre, imagen, peliAsoc } = req.body;
  try {
    await Genero.create({
      nombre: nombre.toLoweCase(),
      imagen,
      peliAsoc,
    });
    res.json({ message: "Se creo un nuevo genero" });
  } catch (error) {
    res.send(error);
  }
};
