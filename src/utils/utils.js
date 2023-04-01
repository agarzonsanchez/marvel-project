import MD5 from "crypto-js/md5";

const API_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_PUBLIC_API_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_API_KEY;
console.log(API_URL);
console.log(API_KEY);
console.log(PRIVATE_KEY);
const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

const fetchHeroes = async (value) => {
  let heroUrl = `${API_URL}`;
  let ts = Date.now().toString();

  let hash = getHash(ts, PRIVATE_KEY, API_KEY);

  let url = `${heroUrl}?ts=${ts}&apikey=${API_KEY}&hash=${hash}&nameStartsWith=${value}`;
  console.log(url);
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.data.results);
    return data.data.results;
  } catch (error) {
    return console.error(error);
  }
};

const fetchHero = async (id) => {
  let heroUrl = `${API_URL}/${id}`;
  let ts = Date.now().toString();

  let hash = getHash(ts, PRIVATE_KEY, API_KEY);

  let url = `${heroUrl}?ts=${ts}&apikey=${API_KEY}&hash=${hash}`;
  console.log(url);
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.data.results);
    return data.data.results;
  } catch (error) {
    return console.error(error);
  }
};

export { fetchHeroes, fetchHero };
