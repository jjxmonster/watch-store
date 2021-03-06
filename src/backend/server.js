const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const { cacheControl } = require('./cacheControl');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../', 'build')));

app.listen(port, '127.0.0.1', () => {
   console.log('server is listening...');
});

app.get('/orders', cacheControl, (req, res) => {
   res.set('Content-Type', 'text/json');
   res.sendFile(path.join(__dirname, 'db.json'));
});

app.get('/*', (req, res) => {
   const fileName = path.join(__dirname, 'build', 'index.html');
   res.sendFile(fileName, {
      root: path.join(__dirname, 'build'),
   });
});

app.post('/orders', cacheControl, (req, res) => {
   fs.readFile(path.join(__dirname, 'db.json'), 'utf-8', (err, data) => {
      if (err) res.end();
      else {
         const orders = JSON.parse(data);
         const newOrder = (req.body = {
            ...req.body,
            id: orders.length + 1,
         });

         const newOrdersList = [...orders, newOrder];

         fs.writeFile(
            path.join(__dirname, 'db.json'),
            JSON.stringify(newOrdersList),
            (err, data) => {
               if (err) res.end();
               else {
                  res.status(200).json(newOrder);
               }
            }
         );
      }
   });
});
