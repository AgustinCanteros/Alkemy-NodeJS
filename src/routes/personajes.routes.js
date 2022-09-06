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
router.post("/characters", createCharacters);
router.delete("/characters/:name", deleteCharacters);
router.put("/characters/:name", updateCharacters);

export default router;
