import { Router } from "express";
import {
  usuarioLogin,
  usuarioRegister,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.post("/auth/login", usuarioLogin);
router.post("/auth/register", usuarioRegister);

export default router;
