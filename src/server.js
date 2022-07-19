"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
const functions_1 = require("./functions/functions");
var PORT = 3000;
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.get('', functions_1.filterAnime);
app.get('/details/:id', functions_1.showAnimeDetails);
app.get('*', (req, res) => {
    res.send('Page not found');
});
app.listen(PORT, function (err) {
    if (err)
        console.log(err);
    console.log('Server listening on PORT', PORT);
});
