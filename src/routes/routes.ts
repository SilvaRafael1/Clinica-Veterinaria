import express from "express";
const router = express.Router();

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

router.route('/auth').post(Auth)
router.route('/tutors').get(getTutors)
router.route('/tutor').post(createTutor)
router.route('/tutor/:id').put(updateTutor).delete(deleteTutor)
router.route('/pet/:tutorId').post(createPet)
router.route('/pet/:petId/tutor/:tutorId').put(updatePet).delete(deletePet)

module.exports = router
