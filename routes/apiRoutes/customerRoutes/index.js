const router = require("express").Router();
const customerController = require("../../../controllers/customerController");
// /api/todos prepended to every route
router
  .route("/")
  .get(customerController.getTodos)
  .post(customerController.insertTodo);
router.route("/:customerId").delete(customerController.deletecustomerById);

module.exports = router;
