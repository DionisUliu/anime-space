"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterAnime = exports.showAnimeDetails = void 0;
const anime_json_1 = __importDefault(require("../../src/data/anime.json"));
const showAnimeDetails = (req, res) => {
    const { id } = req.params;
    res.render('detailsView/index', {
        anime: anime_json_1.default.animeList[+id - 1],
    });
};
exports.showAnimeDetails = showAnimeDetails;
const filterAnime = (req, res) => {
    const { title } = req.query;
    if (title) {
        const newList = anime_json_1.default.animeList.filter((anime) => anime.title.toLowerCase().includes(title));
        return res.render('mainView/index', {
            animeList: newList,
        });
    }
    res.render('mainView/index', {
        animeList: anime_json_1.default.animeList,
    });
};
exports.filterAnime = filterAnime;
