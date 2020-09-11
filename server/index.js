const express = require('express');
const axios = require('axios');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
})

app.get('/users', (req, res) => {
  axios.get('https://randomuser.me/api/?page=1&results=10')
  .then(response => {
    // console.log(response, 'response');
    res.send(response.data)
  }).catch(err => {
    console.log('Err', err);
  })
})

app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
})
