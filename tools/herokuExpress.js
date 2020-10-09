// import express from 'express';
// import path from 'path';
// import compression from 'compression';
// import colors from 'colors'; //eslint-disable-line no-unused-vars

const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express(); //express application


/*eslint-disable no-unused-vars*/
/*eslint-disable no-console*/

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static('dist'));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
   if(err) {
       console.log(err);
   }else{
       console.log(`listening on ${port}`);
       require('heroku-self-ping')("https://denverco100menwhocare.herokuapp.com/");
   }
});