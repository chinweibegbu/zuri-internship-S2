const getPersonsQuery = "SELECT * FROM persons";

const getPersonByIdQuery = "SELECT * FROM persons WHERE id = $1";

const createPersonQuery = "INSERT INTO persons(fullname, age, address) VALUES ($1, $2, $3);"

const updatePersonByIdQueries = {
    fullname: "UPDATE persons SET fullname = $1 WHERE id = $2;",
    age: "UPDATE persons SET age = $1 WHERE id = $2;",
    address: "UPDATE persons SET address = $1 WHERE id = $2;"
}

const deletePersonByIdQuery = "DELETE FROM persons WHERE id = $1;"

export const queries = {
    getPersonsQuery,
    getPersonByIdQuery,
    createPersonQuery,
    updatePersonByIdQueries,
    deletePersonByIdQuery
};