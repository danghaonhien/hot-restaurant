const router = require("express").Router();
const customerController = require("../../../controllers/customerController");
// /api/todos prepended to every route
router
  .route("/")
  .get(customerController.getTodos)
  .post(customerController.insertTodo)


  router.route("/count").get(customerController.getCustomerCount);
router.route("/:customerId")
.delete(customerController.deletecustomerById)
.get(customerController.getCustomerById)
.patch(customerController.updateCustomerById)


module.exports = router;
