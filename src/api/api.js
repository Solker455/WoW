import axios from "axios";

export function getListHeroes() {
    const url = ``;
    return axios.get(url, {
        headers: {
            'Access-Control-Allow-Origin': 'https://api.vk.com/'
        }
    })
}