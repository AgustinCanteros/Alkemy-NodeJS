import express from "express";
import rutasPersonajes from "./routes/personajes.routes.js";
import rutasUsuarios from "./routes/usuarios.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use(rutasPersonajes);
app.use(rutasUsuarios);

export default app;
