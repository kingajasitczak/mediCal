const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set true only with HTTPS
}));

const loginSubmissions = []; // Array to store login submissions
const basicSubmissions = [];
const extendedSubmissions = []; // New array for second survey


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

mongoose.connect('mongodb+srv://skrocz3k:2fE9sVBOoUnT0CjF@medical.pedrwoe.mongodb.net/mediCal?retryWrites=true&w=majority&appName=mediCal', {});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

const surveySchema = new mongoose.Schema({
  email: { type: String, required: true },  // Associate with the logged-in user
  age: Number,
  height: Number,
  weight: Number,
  physicalActivity: String,
  bmi: Number,
  submittedAt: { type: Date, default: Date.now }
});

const Survey = mongoose.model('Survey', surveySchema, 'UserSurveys');

const User = mongoose.model('User', userSchema, 'Login info');

// Register endpoint
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const user = new User({ email, passwordHash });
    await user.save();
    res.status(201).send('User registered.');
  } catch (err) {
    res.status(400).send('User already exists or error occurred.');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && await bcrypt.compare(password, user.passwordHash)) {
    req.session.email = email;

    // Check if survey already exists
    const existingSurvey = await Survey.findOne({ email });

    if (existingSurvey) {
      res.status(200).json({ redirect: '/main-view' });
    } else {
      res.status(200).json({ redirect: '/basic-survey' });
    }
  } else {
    res.status(401).send('Invalid credentials');
  }
});



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

app.post('/submit-b', async (req, res) => {
  const data = req.body;
  basicSubmissions.push(data);

  // Calculate BMI
  const bmi = data.weight / ((data.height / 100) ** 2);
  
  const email = req.session.email; // Retrieve from session
  // Create and save survey
  
  const existing = await Survey.findOne({ email });

  if (existing) {
    return res.status(400).send('Survey already submitted.');
  }
  
  const survey = new Survey({
    email,
    age: data.age,
    height: data.height,
    weight: data.weight,
    physicalActivity: data.physicalActivity,
    bmi: bmi.toFixed(2)
  });

  try {
    await survey.save();
    console.log('Survey saved to DB:', survey);
    res.redirect('/main-view.html');
  } catch (err) {
    console.error('Error saving survey:', err);
    res.status(500).send('Failed to save survey data');
  }
});

app.get('/submit-b', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main-view.html'));
});

app.get('/main-view', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main-view.html'));
});


app.get('/user-data', async (req, res) => {
  const email = req.session.email;

  if (!email) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  try {
    const survey = await Survey.findOne({ email });

    if (!survey) {
      return res.status(404).json({ error: 'No survey found' });
    }
	console.log(survey);
    res.json({
      age: survey.age,
      height: survey.height,
      weight: survey.weight,
      physicalActivity: survey.physicalActivity,
      bmi: survey.bmi
    });
  } catch (err) {
    console.error('Error fetching survey:', err);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

app.get('/register-view', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});


//app.get('/user-data', (req, res) => {
  //if (basicSubmissions.length > 0) {
    //const latest = basicSubmissions[basicSubmissions.length - 1];  // Get the latest submission
    //res.json({ physicalActivity: latest.physicalActivity });  // Send the physicalActivity data as a response
	//console.log(latest.physicalActivity);
  //} else {
    //res.json({ physicalActivity: null });  // If no submissions, send null
  //}
//});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});