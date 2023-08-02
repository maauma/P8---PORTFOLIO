const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Remplacez par votre URI de connexion MongoDB
const uri = "mongodb+srv://mateo:rtyxK7RyPUA1Ivj3@cluster0.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Création du modèle
const Schema = mongoose.Schema;
const contactSchema = new Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  newContact.save()
    .then(() => res.json('Contact added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
