const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


const users = require('./routes/api/users');
const app = express()

const admin = require('firebase-admin')
const credentials = require("./crack-mbose-firebase-adminsdk-r4chf-0807267b3d.json")

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/singup", async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  }
  const userResponse = await admin.auth().createUser({
    email: user.email,
    password: user.password,
    emailVerified: false,
    disabled: false
  });
  res.json(userResponse);
})


// Connect to MongoDB
mongoose.connect('mongodb://localhost/my-database', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get('', (req, res) => {
  res.send("This is a REST API server for the Crack MBOSE Application");
})

app.use('/api/users', users);