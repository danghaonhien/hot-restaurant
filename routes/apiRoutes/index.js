const router = require('express').Router();


const todoRoutes = require('./todoRoutes');
// /api  prepended to every route declared in here
// todos


// declares a route for /api/todos
router.use("/todos", todoRoutes);


module.exports = router;
