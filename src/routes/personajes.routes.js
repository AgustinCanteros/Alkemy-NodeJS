import { Router } from "express";
import {
  getCharacters,
  createCharacters,
  deleteCharacters,
  updateCharacters,
} from "../controllers/crudController.js";

const router = Router();

router.get("/characters", getCharacters);
router.post("/characters", createCharacters);
router.delete("/characters/:name", deleteCharacters);
router.put("/characters/:name", updateCharacters);

export default router;