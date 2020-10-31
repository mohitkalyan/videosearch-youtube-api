// AIzaSyBDZju7FqSQcJIzh6FD5ZKnwADJ9tzCC_0

import axios from "axios";

const KEY = "AIzaSyBDZju7FqSQcJIzh6FD5ZKnwADJ9tzCC_0"

const youtube = axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        key : KEY,
        part : "snippet",
        maxResults : 5
    }
})

export default youtube;

