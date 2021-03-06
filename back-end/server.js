const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/Creative-Project-4', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images' for local or 
// /var/www/creativeproject4.garrettfarnsworth.com/images/ for production
const multer = require('multer')
const upload = multer({
  dest: '/var/www/creativeproject4.garrettfarnsworth.com/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the sloth haiku: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  title: String,
  path: String,
  haiku: String,
  author: String,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

// Delete an Item.
app.delete('/api/items/:id', async (req, res) => {
  console.log("Delete ",req.params.id);
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Edit an Item
app.put('/api/items/:id', async (req, res) => {
  console.log("Edit ",req.params.id);
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });
    item.title = req.body.title
    item.haiku = req.body.haiku
    item.author = req.body.author
    item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  console.log("Get Route");
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  console.log("api/photos ",req.file);
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
    console.log("api/items ", req.body.title);
    console.log("api/items ", req.body.haiku);
    console.log("api/items ", req.body.author);
    const item = new Item({
    title: req.body.title,
    path: req.body.path,
    haiku: req.body.haiku,
    author: req.body.author,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3001, () => console.log('Server listening on port 3001!'));
