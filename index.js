const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Declare routes right here.
const routes = require('./routes');

// Prepend / to any route declared inside of routes
app.use(routes);

app.listen(PORT, () => console.log('Port started on port: ' + PORT));