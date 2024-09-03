const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Process the contact form data (e.g., send email, store in a database)
    res.send('Thank you for your message!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
