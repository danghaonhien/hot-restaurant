const insertCustomer = "INSERT INTO tables (name,email,phone) VALUES (?,?,?);";
const getCustomer = "SELECT * FROM tables;";
const deleteCustomerById = "DELETE FROM tables WHERE id = ?;";
const getCustomerCount = "SELECT COUNT(id) FROM tables;";
const getCustomerById = "SELECT * FROM tables  WHERE id = ?;";
const updateCustomerById = "UPDATE tables SET name = ?,email=?,phone=? WHERE id = ?"
module.exports = {
  insertCustomer,
  getCustomer,
  deleteCustomerById,
  getCustomerCount,
  getCustomerById,
  updateCustomerById 

};
