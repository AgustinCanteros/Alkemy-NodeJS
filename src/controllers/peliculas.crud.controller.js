import { Pelicula } from "../models/Pelicula.js";
import { Genero } from "../models/Genero.js";

//OBTENER PELICULAS
export const getMovies = async (req, res) => {
  try {
    if (req.query.name || req.query.genre) {
      const query = Object.keys(req.query).join().toLowerCase();
      const queryValue = req.query[query].toLowerCase();
      if (queryValue.length === 0)
        return res.json({ message: "No se pasaron valores por query" });
      const variablesBusqueda = {
        name: "nombre",
        genre: "genero",
      };
      if (variablesBusqueda[query] === "genero") {
        const peliculas = await Pelicula.findAll({
          include: {
            where: {
              nombre: queryValue,
            },
            model: Genero,
            attributes: ["nombre"],
            through: {
              attributes: [],
            },
          },
        });
        return res.json(peliculas);
      } else if (variablesBusqueda[query] === "name") {
        const peliculas = await Pelicula.findAll({
          where: {
            nombre: queryValue,
          },
          include: {
            model: Genero,
            attributes: ["nombre"],
            through: {
              attributes: [],
            },
          },
        });
        if (peliculas[0].length === 0)
          return res.json({
            message: "No se encontraron peliculas con ese nombre",
          });
        return res.json(peliculas);
      }
    }
    const movies = await Pelicula.findAll();
    if (!movies[0])
      return res
        .status(404)
        .json({ message: "No se encontraron peliculas en la base de datos" });
    res.status(200).json(movies);
  } catch (error) {
    res.send(error);
  }
};

//CREAR PELICULAS
export const createMovies = async (req, res) => {
  const { imagen, titulo, calificacion, personajesAsoc, genero } = req.body;
  try {
    const newPelicula = await Pelicula.create({
      imagen,
      titulo: titulo.toLowerCase(),
      calificacion,
      personajesAsoc,
    });
    if (genero.length != 0) {
      await genero.map(async (g) => {
        let genre = await Genero.findAll({
          where: {
            nombre: g.toLowerCase(),
          },
          attributes: ["nombre", "imagen"],
        });
        newPelicula.addGenero(genre);
      });
    }
    res.json(newPelicula);
  } catch (error) {
    res.send(error);
  }
};

//ELIMINAR PELICULAS
export const deleteMovie = async (req, res) => {
  const { titulo } = req.params;
  try {
    const eliminado = await Pelicula.destroy({
      where: {
        titulo: titulo.toLowerCase(),
      },
    });
    if (eliminado) return res.json({ message: "Se ha eliminado con exito" });
    res.json({ message: "Error al eliminar" });
  } catch (error) {
    res.send(error);
  }
};

//ACTUALIZAR PELICULAS
export const updateMovies = async (req, res) => {
  const { name } = req.params;
  const { titulo, imagen, calificacion, personajesAsoc } = req.body;
  try {
    await Pelicula.update(
      {
        titulo: titulo.toLowerCase(),
        imagen,
        calificacion,
        personajesAsoc,
      },
      {
        where: {
          titulo: name.toLowerCase(),
        },
      }
    );
  } catch (error) {
    res.send(error);
  }
};
