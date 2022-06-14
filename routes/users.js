import express from "express";
const router = express.Router();
import {
  createUser,
  deleteUser,
  getUSers,
  patchUser,
  userDetail,
} from "../controllers/users.js";

let users = [];

router.get("/", getUSers);
router.post("/", createUser);
router.get("/:id", userDetail);
router.delete("/:id", deleteUser);
router.patch("/:id", patchUser);

export default router;
