const insertCustomer = "INSERT INTO tables (name,email,phone) VALUES (?,?,?);";
const getCustomer = "SELECT * FROM tables;";
const deleteCustomerById = "DELETE FROM tables WHERE id = ?;";
module.exports = {
  insertCustomer,
  getCustomer,
  deleteCustomerById,
};
