import { Router } from "express";
import { check } from "express-validator";

import { getUsers, signup, login } from "../controllers/user-controller.js";

const router = Router();

const passLength = 6;

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: passLength }),
  ],
  signup
);

router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: passLength }),
  ],
  login
);

router.get("/", getUsers);

export default router;
