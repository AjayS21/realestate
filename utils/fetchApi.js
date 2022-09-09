import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'ce9957c843msh3ad575701fe2e7ep1b682bjsn639aa9fe5f97' ,
    },
  });
    
  return data;
}


//  headers: {
//    'X-RapidAPI-Key': 'ce9957c843msh3ad575701fe2e7ep1b682bjsn639aa9fe5f97',
//    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//  }