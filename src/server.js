"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const functions_1 = require("./functions/functions");
const PORT = process.env.PORT || 3000;
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
    console.log('Server listening on PORT', process.env.PORT || 3000);
});
