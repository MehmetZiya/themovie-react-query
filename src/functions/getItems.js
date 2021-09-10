const baseURL = "https://api.themoviedb.org/3/";
const api_key = "b5cd38a2b87f343803775af240948692";
const lang = "en-US";
const region = "TR"

export const fetchTopList = async (page) => {
  const res = await fetch(`
      ${baseURL}movie/top_rated?api_key=${api_key}&language=${lang}&page=${page}&region=${region}`);
  return res.json();
};

export const fetchPopularFilms = async (page) => {
  const res = await fetch(`
        ${baseURL}movie/popular?api_key=${api_key}&language=${lang}&page=${page}&region=${region}`);
  return res.json();
};

export const fetchNowPlaying = async (page) => {
  const res = await fetch(`
        ${baseURL}movie/now_playing?api_key=${api_key}&language=${lang}&page=${page}&region=${region}`);
  return res.json();
};

export const fetchGenres = async () => {
    const res = await fetch(`
        ${baseURL}genres/movie/list?api_key=${api_key}&language=${lang}`);
    return res.json();
  };
  