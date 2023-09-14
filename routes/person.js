import express from "express";
import { createPerson, getPersons, getPersonById, updatePersonById, deletePersonById } from "../controllers/persons.js";

// Initialising Express router
const router = express.Router();

// Creating app routes
router.get('/', getPersons);
router.get('/:id', getPersonById);
router.post('/', createPerson);
router.patch('/:id', updatePersonById);
router.delete('/:id', deletePersonById);

export default router;