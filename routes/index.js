const router = require('express').Router();

const path = require('path')
// Getting / prepended to everything
// Hey I declared routes here.
const apiRoutes = require('./apiRoutes');



// router.get('/', (req, res) => {
//     if(process.env.NODE_ENV === "production") {
//         res.sendFile(path.join(__dirname, "build", "index.html"));
//     }
// });

// /something was prepended to every route inside of here
// Prepend /api to all of the routes declared inside of apiRoutes
//  /api

// This will prepend /api to anyroute declared within apiRoutes
router.use('/api', apiRoutes);



module.exports = router;