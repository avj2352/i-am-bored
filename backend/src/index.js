const path = require('path');
const express = require('express');
require('./util/colors');

import routes from './routes/app.routes';
import { getPORT } from './util/config.util';

const app = express();
const PORT = getPORT();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use('/', express.static(path.join(__dirname,'/build')));

// simple API
app.get('/hello', (req, res)=>{
    res.send('Hello There !');
});

// //Serving static files
app.use('/', express.static(path.join(__dirname,'build')));
// app.use(passport.initialize());
// app.use(passport.session());

// configure routes
routes(app);

const server = app.listen(PORT, ()=>{
    console.log(`Server listening at ${server.address().port}`.info);
});