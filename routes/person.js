import express from "express";
import { createPerson, getAllPersons, getPersonById, updatePersonById, deletePersonById } from "../controllers/persons.js";

// Initialising Express router
const router = express.Router();

// Creating app routes
router.get('/', getAllPersons);
router.get('/:id', getPersonById);
router.post('/', createPerson);
router.patch('/:id', updatePersonById);
router.delete('/:id', deletePersonById);

export default router;