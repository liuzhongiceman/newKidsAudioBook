const express = require('./node_modules/express');
const bodyParser = require('./node_modules/body-parser');
const app = express();
const cors = require('./node_modules/cors/lib');
const upload = require('./middleware/file-upload');

app.use(bodyParser.json());
app.use(cors());

const db = require('./models');
const audioBooks = db.audioBooks;

app.post('/upload', upload.array('file', 1), (req, res) => {
  res.send({ file: req.file });
});

app.post('/post', (req, res) => {
  console.log('req.body', req.body);
  // Create a audio
  const audio = new audioBooks({
    title: req.body.title,
    reader: req.body.author,
    imagePath: req.body.imagePath,
    audioPath: req.body.imagePath
  });
  
  console.log('audio', audio);
  // Save auido in the database
  audio
    .save(audio)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post."
      });
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
