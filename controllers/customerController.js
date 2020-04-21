const connection = require("../config/connection");
const customerQueries = require("../models/customer/customerQueries");
module.exports = {
  getTodos: (req, res) => {
    connection.query(customerQueries.getCustomer, (err, todos) => {
      if (err) {
        throw err;
      }
      return res.json(todos);
    });
  },
  insertTodo: (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { phone } = req.body;

    connection.query(
      customerQueries.insertCustomer,
      [name, email, phone],
      (err, dbRes) => {
        if (err) {
          throw err;
        }

        connection.query(customerQueries.getCustomer, (err, todos) => {
          if (err) {
            throw err;
          }
          return res.json(todos);
        });
      }
    );
  },
  deletecustomerById: (req, res) => {
    const { customerId } = req.params;
    connection.query(
      customerQueries.deleteCustomerById,
      parseInt(customerId),
      (err, dbRes) => {
        if (err) {
          throw err;
        }
        return res.json({ success: true });
      }
    );
  },
};
