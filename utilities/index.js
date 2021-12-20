import axios from "axios";
import {API_KEY, BASE_URL, SEARCH_URL } from "../Constants";

const useApiRequest = async(url) => {
  const response = await axios.get(`${BASE_URL}${url}?api_key=${API_KEY}`)
  const data = await response;
  return data.data
};

const getPoster = (url) => {
  return `https://image.tmdb.org/t/p/w500/${url}?api_key=${API_KEY}`;
};

 const searchMovies= async (text) => {
    const response = await axios.get(`${SEARCH_URL}&query=${text}`)
    const data = await response;
    return data
  }


export { useApiRequest, getPoster, searchMovies };
