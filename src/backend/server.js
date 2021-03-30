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
   fs.readFile(path.join(__dirname, 'db.json'), 'utf-8', (err, data) => {
      if (err) res.end();
      else {
         const orders = JSON.parse(data).orders;

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
                  res.end(200);
               }
            }
         );
      }
   });
});
