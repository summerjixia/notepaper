import axios from 'axios'

axios.defaults.baseURL = "http://114.67.125.226:8081";

axios.interceptors.request.use(function (config) {
    // console.log(config.url)
    return config;
})

axios.interceptors.response.use(function (response) {
    // console.log(response.config.url)
    return response;
})


export const get = (url, param) => {
    return axios.get(url, param);
}

export const post = (url, param) => {
    return new Promise((resolve) => {
        axios.post(url, param).then((res) => {
            resolve(res);
        })
    })
}