import axios from "axios";

const youtube = axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        key : process.env.REACT_APP_KEY_YOUTUBE,
        part : "snippet",
        maxResults : 5
    }
})

export default youtube;

