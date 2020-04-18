const insertTodo = "INSERT INTO todos (title) VALUES (?);";
const getTodos = "SELECT * FROM todos;";
const deleteTodoById = "DELETE FROM todos WHERE id = ?;";
const getTodoById = "SELECT * FROM todos WHERE id = ?;";
const updateTodo = "UPDATE todos SET completed = true WHERE id = ?;";
const updateTodoTitleById = "UPDATE todos SET title = ? WHERE id = ?";

module.exports = {
    insertTodo,
    getTodos,
    deleteTodoById,
    getTodoById,
    updateTodo,
    updateTodoTitleById
};

