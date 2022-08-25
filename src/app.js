import express from "express";
import rutas from "./routes/personajes.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use(rutas);

export default app;
