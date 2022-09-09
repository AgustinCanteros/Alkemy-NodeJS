import { Router } from "express";
import {
  getCharacters,
  createCharacters,
  deleteCharacters,
  updateCharacters,
} from "../controllers/crud.controller.js";
import { tokenAuth } from "../middlewares/index.js";

const router = Router();

router.get("/characters", tokenAuth, getCharacters);
router.post("/characters", tokenAuth, createCharacters);
router.delete("/characters/:name", tokenAuth, deleteCharacters);
router.put("/characters/:name", tokenAuth, updateCharacters);

export default router;
