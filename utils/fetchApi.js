import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '<YOUR RAPID API KEY' ,
    },
  });
    
  return data;
}


//  headers: {
//    'X-RapidAPI-Key': '',
//    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//  }
