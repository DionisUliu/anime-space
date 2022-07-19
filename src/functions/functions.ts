import { Request, Response } from 'express';
import anime from '../../src/data/anime.json';

export const showAnimeDetails = (req: Request, res: Response) => {
  const { id } = req.params;
  res.render('detailsView/index', {
    anime: anime.animeList[+id - 1],
  });
};

export const filterAnime = (req: Request, res: Response) => {
  const { title } = req.query;
  if (title) {
    const newList = anime.animeList.filter((anime) =>
      anime.title.toLowerCase().includes(title as string),
    );
    return res.render('mainView/index', {
      animeList: newList,
    });
  }
  res.render('mainView/index', {
    animeList: anime.animeList,
  });
};
