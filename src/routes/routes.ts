import express from "express";
const router = express.Router();
import { authMiddleware } from "../middlewares/auth";

const { Auth } = require("../controllers/AuthController");
const {
  createPet,
  updatePet,
  deletePet,
} = require("../controllers/PetController");
const {
  getTutors,
  createTutor,
  updateTutor,
  deleteTutor,
} = require("../controllers/TutorController");

router.route("/auth").post(Auth);
router.route("/tutors").get(authMiddleware, getTutors);
router.route("/tutor").post(createTutor);
router
  .route("/tutor/:id")
  .put(authMiddleware, updateTutor)
  .delete(authMiddleware, deleteTutor);
router.route("/pet/:tutorId").post(authMiddleware, createPet);
router
  .route("/pet/:petId/tutor/:tutorId")
  .put(authMiddleware, updatePet)
  .delete(authMiddleware, deletePet);

module.exports = router;
