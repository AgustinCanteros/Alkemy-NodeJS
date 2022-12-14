import { Pelicula } from "../models/Pelicula.js";
import { Personaje } from "../models/Personaje.js";

export const getCharacters = async (req, res) => {
  try {
    if (req.query.name || req.query.age || req.query.movies) {
      const query = Object.keys(req.query).join().toLowerCase();
      const queryValue = req.query[query].toLowerCase();
      if (queryValue.length === 0) {
        res.json({ message: "No se paso ningun valor por query" });
      } else {
        const variablesBusqueda = {
          name: "nombre",
          age: "edad",
          movies: "titulo",
        };
        if (variablesBusqueda[query] === "titulo") {
          const personajes = await Personaje.findAll({
            include: {
              where: {
                titulo: queryValue,
              },
              model: Pelicula,
              attributes: ["titulo"],
              through: {
                attributes: [],
              },
            },
          });
          console.log(personajes);
          if (personajes.length === 0)
            return res.json({ message: "No se encontraron personajes" });
          return res.json(personajes);
        }
        const parametro = variablesBusqueda[query];
        const personaje = await Personaje.findAll({
          where: {
            [parametro]: queryValue,
          },
        });
        if (personaje.length === 0) {
          res.json({ message: "No se encontro el personaje" });
        } else {
          res.json(personaje);
        }
      }
    } else {
      const characters = await Personaje.findAll({
        attributes: ["nombre", "imagen"],
      });
      if (characters != 0) {
        res.json(characters);
      } else {
        res.json({ message: "No hay personajes en la base de datos" });
      }
    }
  } catch (error) {
    res.json({
      message: "Error al traer los personajes desde la base de datos",
    });
  }
};

export const createCharacters = async (req, res) => {
  const { image, nombre, edad, peso, historia, apariciones } = req.body;
  try {
    const regPersonaje = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (regPersonaje.test(nombre.toLowerCase()))
      return res.json({ message: "No se permieten los caracteres especiales" });
    const newPersonaje = await Personaje.create({
      image,
      nombre: nombre.toLowerCase(),
      edad,
      peso,
      historia,
      apariciones: apariciones.toLowerCase(),
    });
    res.json(newPersonaje);
  } catch (error) {
    if (error.parent === undefined) {
      res.json({
        message: `Codigo de error postgres: ${error.errors[0].message}`,
      });
    } else {
      res.json({
        message: `Codigo de error postgres: ${error.parent.code}`,
      });
    }
  }
};

export const deleteCharacters = async (req, res) => {
  const { name } = req.params;
  try {
    await Personaje.destroy({
      where: {
        name: name.toLowerCase(),
      },
    });
    res
      .sendStatus(200)
      .json({ message: "El personaje fue eliminado con exito" });
  } catch (error) {
    res.sendStatus(404);
  }
};

export const updateCharacters = async (req, res) => {
  const { name } = req.params;
  const { nombre, imagen, edad, peso, historia, apariciones } = req.body;
  try {
    await Personaje.update(
      {
        nombre: nombre.toLowerCase(),
        imagen,
        edad,
        peso,
        historia,
        apariciones: apariciones.toLowerCase(),
      },
      {
        where: {
          nombre: name.toLowerCase(),
        },
      }
    );
    res.sendStatus(200);
  } catch (error) {
    res.json({ message: "Error al actualizar el personaje" });
  }
};
