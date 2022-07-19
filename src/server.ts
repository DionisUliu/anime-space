import { Request, Response } from 'express';
var express = require('express');
var app = express();
import { showAnimeDetails, filterAnime } from './functions/functions';
var PORT = 3000;

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('', filterAnime);

app.get('/details/:id', showAnimeDetails);

app.get('*', (req: Request, res: Response) => {
  res.send('Page not found');
});

app.listen(PORT, function (err: Response) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
