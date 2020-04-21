const router = require("express").Router();

const customerRoutes = require("./customerRoutes");
// /api  prepended to every route declared in here
// todos

// declares a route for /api/todos
const commentRoutes = require("./commentRoutes");
// declares a route for /api/todos
router.use("/comments", commentRoutes);
router.use("/customer", customerRoutes);

module.exports = router;
