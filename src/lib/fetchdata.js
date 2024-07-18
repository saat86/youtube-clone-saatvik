import React from "react";
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
    part: 'snippet'
  },
  headers: {
    "x-rapidapi-key":process.env.REACT_APP_VITE_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

const Fetchdata = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    const { data } = response;
    return data;
  } catch (err) {
    console.log("error fetching data", err);
  }
};

export default Fetchdata;
