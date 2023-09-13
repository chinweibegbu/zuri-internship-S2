import { v4 as uuidv4 } from 'uuid';

let persons = [];

export const createPerson = (req, res) => {
    const newPerson = req.body;
    const newPersonWithId = { ...newPerson, id: uuidv4() };
    persons.push(newPersonWithId);
    res.status(201).send(`Person with name ${newPersonWithId.name} successfully created!`);
}

export const getAllPersons = (req, res) => {
    res.send(persons);
}

export const getPersonById = (req, res) => {
    const { id } = req.params;
    const foundPerson = persons.find((person) => person.id === id);
    res.send(foundPerson);
}

export const updatePersonById = (req, res) => {
    const { id } = req.params;
    const { name, age, address } = req.body;

    let personToUpdate = persons.find((person) => person.id === id);

    if (name) personToUpdate.name = name;
    if (age) personToUpdate.age = age;
    if (address) personToUpdate.address = address;

    res.send(`Person with ID ${id} successfully updated!`);
}

export const deletePersonById = (req, res) => {
    const { id } = req.params;
    persons = persons.filter((person) => person.id !== id);
    res.send(`Person with ID ${id} successfully deleted!`);
}