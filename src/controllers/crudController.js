//IMPORTAR MODELO DE LA BASE DE DATOS
import { Personaje } from "../models/Personaje.js";

//OBTENER TODOS LOS PERSONAJES
export const getCharacters = async (req, res) => {
  try {
    if (req.query) { //SI SE PASA UN QUERY REALIZO LA BUSQUEDA ESPECIFICA, SINO BUSCO TODOS LOS PERSONAJES
      const query = Object.keys(req.query).join(); //OBTENGO EL QUERY KEY QUE ME LLEGA DESDE EL CLIENTE, LO TRANSFORMO EN ARRAY CON .KEYS Y EN STRING CON .JOIN
      const queryValue = req.query[query]; //OBTENGO EL QUERY VALUE
      if (queryValue.length === 0) { //VERIFICO QUE SE QUERY NO ESTE VACIO, SI LO ESTA DEVUELVO UN MENSAJE INDICANDOLO
        res.json({ message: "No se paso ningun valor por query" });
      } else {
        const variablesBusqueda = {
          name: "nombre",
          age: "edad",
        };
        const parametro = variablesBusqueda[query];
        const personaje = await Personaje.findAll({
          where: {
            [parametro]: queryValue,
          },
        });
        if (personaje.length === 0) { //VERIFICO QUE SE EL PERSONAJE EXISTA EN LA DB, SI NO EXISTE DEVUELVO UN MENSAJE INDICANDOLO Y SI EXISTE LO DEVUELVO POR COMO JSON
          res.json({ message: "No se encontro el personaje" });
        } else {
          res.json(personaje);
        }
      }
    } else {
      const characters = await Personaje.findAll({
        attibutes: ["nombre", "imagen"], //SOLO PIDO NOMBRE Y IMAGEN CON EL PARAMETRO ATTRIBUTES
      }); //TRAER TODOS LOS PERSONAJES DE LA DB
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

//CREAR UN PERSONAJE
export const createCharacters = async (req, res) => {
  const { image, nombre, edad, peso, historia, apariciones } = req.body; //EXTRAER LOS DATOS ENVIADOS DESDE EL CLIENTE
  try {
    const newPersonaje = await Personaje.create({
      image,
      nombre,
      edad,
      peso,
      historia,
      apariciones,
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

//ELIMINAR UN PERSONAJE
export const deleteCharacters = async (req, res) => {
  const { name } = req.params;
  try {
    await Personaje.destroy({
      where: {
        name,
      },
    });
    res
      .sendStatus(200)
      .json({ message: "El personaje fue eliminado con exito" });
  } catch (error) {
    res.sendStatus(404);
  }
};

//ACTUALIZAR UN PERSONAJE
export const updateCharacters = async (req, res) => {
  const { name } = req.params;
  const { nombre, imagen, edad, peso, historia, apariciones } = req.body;
  try {
    await Personaje.update(
      {
        nombre,
        imagen,
        edad,
        peso,
        historia,
        apariciones,
      },
      {
        where: {
          nombre: name,
        },
      }
    );
    res.sendStatus(200);
  } catch (error) {
    res.json({ message: "Error al actualizar el personaje" });
  }
};
