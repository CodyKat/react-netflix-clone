import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "d86eb373c1ad577488ffa5fccd50593e",
        language: "Ko_KR",
    },
});

export default instance;

