const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const loginSubmissions = []; // Array to store login submissions
const basicSubmissions = [];

const extendedSubmissions = []; // New array for second survey

app.get('/login-view', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/submit-login', (req, res) => {
    const data = req.body;
    loginSubmissions.push(data);
    res.sendStatus(200);
});

// Route: Serve lifestyle survey view
app.get('/extended-survey', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'extended-survey.html'));
});

// Route: Handle extended survey submission
app.post('/submit-e', (req, res) => {
    const data = req.body;
    extendedSubmissions.push(data);
    console.log('New extended survey submission:', data);
    res.sendStatus(200);
});

app.get('/basic-survey', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'basic-survey.html'));
});

app.post('/submit-b', (req, res) => {
    const data = req.body;
    basicSubmissions.push(data);
    console.log(basicSubmissions); // For debugging
	res.redirect('/main-view.html');
});

app.get('/submit-b', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main-view.html'));
});

app.get('/main-view', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main-view.html'));
});

app.get('/user-data', (req, res) => {
  if (basicSubmissions.length > 0) {
    const latest = basicSubmissions[basicSubmissions.length - 1];  // Get the latest submission
    res.json({ physicalActivity: latest.physicalActivity });  // Send the physicalActivity data as a response
	console.log(latest.physicalActivity);
  } else {
    res.json({ physicalActivity: null });  // If no submissions, send null
  }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

