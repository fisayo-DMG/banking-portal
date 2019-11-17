const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views')); // configure directory where our views can be found
app.set('view engine', 'ejs'); // set view engine to ejs

// configure static directory, all our css/js for the client side is found in
// the public directory
app.use(express.static(path.join(__dirname, 'public'))); 

const accountData = fs.readFileSync('src/json/accounts.json', 'utf8');
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync('src/json/users.json', { encoding: 'utf8' });
const users = JSON.parse(userData);

app.get('/', (req, res) => {
    res.render('index', { title: 'Account Summary', accounts })
})

app.get('/savings', (req, res) => {
    res.render('account', { account: accounts.savings })
});

app.get('/checking', (req, res) => {
    res.render('account', { account: accounts.checking })
});

app.get('/credit', (req, res) => {
    res.render('account', { account: accounts.credit })
});

app.get('/profile', (req, res) => {
    res.render('profile', { user: users[0] })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('PS Project Running on port 3000!');
});