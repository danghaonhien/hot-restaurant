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
  getCustomerCount: (req, res) => {
    connection.query(customerQueries.getCustomerCount, (err, todos) => {
      if (err) {
        throw err;
      }
      return res.json(todos[0]);
    });
  },

  getCustomerById: (req, res) => {
    const { customerId } = req.params;
    connection.query(customerQueries.getCustomerById, parseInt(customerId), (err, todos) => {
        if(err) {
            return res.json(err);
        }
        return res.json(todos[0]);
    });
},

updateCustomerById: (req, res) => {
  const { customerId } = req.params;
  const { name } = req.body;
  const { email } = req.body;
  const { phone } = req.body;

  connection.query(customerQueries.updateCustomerById, [name,email,phone, parseInt(customerId)], (err, dbJson) => {
      if(err) {
          throw new Error(err);
      }
      res.json({ success: true });
  });
}
};
