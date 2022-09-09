import { Router } from "express";
import {
  getGeneros,
  createGeneros,
} from "../controllers/generos.crud.controller.js";
import { tokenAuth } from "../middlewares/tokenAuth.js";

const router = Router();

router.get("/generos", tokenAuth, getGeneros);
router.post("/generos", tokenAuth, createGeneros);

export default router;
