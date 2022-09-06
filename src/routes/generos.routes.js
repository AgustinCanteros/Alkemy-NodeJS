import { Router } from "express";
import {
  getGeneros,
  createGeneros,
} from "../controllers/generos.crud.controller.js";

const router = Router();

router.get("/generos", getGeneros);
router.post("/generos", createGeneros);

export default router;
