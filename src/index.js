import { sequelize } from "./database/db.js";
import app from "./app.js";

import './models/Personaje.js'
import './models/Pelicula.js'
import './models/Genero.js'

const port = 3000;

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(port, console.log(`Conectado en el puerto ${port}`));
  } catch (error) {
    console.log("Error al conectar con la base de datos");
  }
}

main();
