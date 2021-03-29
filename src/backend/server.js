const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, '127.0.0.1', () => {
   console.log('server is listening...');
});

app.get('/orders', (req, res) => {
   console.log(req.protocol);
});

app.post('/orders', (req, res) => {});
