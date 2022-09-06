import { Router } from "express";
import {
  getMovies,
  createMovies,
  deleteMovie,
  updateMovies,
} from "../controllers/peliculas.crud.controller.js";

const router = Router();

router.get("/movies", getMovies);
router.post("/movies", createMovies);
router.delete("/movies/:name", deleteMovie);
router.put("/movies/:name", updateMovies);

export default router;
