import { Router } from "express";
import {
  getMovies,
  createMovies,
  deleteMovie,
  updateMovies,
} from "../controllers/peliculas.crud.controller.js";
import { tokenAuth } from "../middlewares/index.js";

const router = Router();

router.get("/movies", tokenAuth, getMovies);
router.post("/movies", tokenAuth, createMovies);
router.delete("/movies/:name", tokenAuth, deleteMovie);
router.put("/movies/:name", tokenAuth, updateMovies);

export default router;
