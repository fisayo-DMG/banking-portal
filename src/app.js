const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views')); // configure directory where our views can be found
app.set('view engine', 'ejs'); // set view engine to ejs

// configure static directory, all our css/js for the client side is found in
// the public directory
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
    res.render('index', {title: 'Index'})
})

app.listen(process.env.PORT || 3000, () => {
    console.log('PS Project Running on port 3000!');
});