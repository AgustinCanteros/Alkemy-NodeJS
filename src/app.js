import express from "express";
import rutasPersonajes from "./routes/personajes.routes.js";
import rutasUsuarios from "./routes/usuarios.routes.js";
import rutasPeliculas from "./routes/peliculas.routes.js";
import rutasGeneros from "./routes/generos.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use(rutasPersonajes);
app.use(rutasUsuarios);
app.use(rutasPeliculas);
app.use(rutasGeneros);

export default app;
