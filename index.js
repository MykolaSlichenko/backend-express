const express = require('express');
const app = express();
const port = 3003;
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Got a GET response.');
});

app.post('/', (req, res) => {
  res.send('Got a POST request')
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}!`)
});