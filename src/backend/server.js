const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const { cacheControl } = require('./cacheControl');

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, '127.0.0.1', () => {
   console.log('server is listening...');
});

app.get('/orders', cacheControl, (req, res) => {
   res.set('Content-Type', 'text/json');

   res.sendFile(path.join(__dirname, 'db.json'));
});

app.post('/orders', cacheControl, (req, res) => {
   console.log(req.body);
   res.send();
});
