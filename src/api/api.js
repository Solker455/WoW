import axios from "axios";

export function getListHeroes(token) {
    const url = `https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=ru_EU&access_token=${token}`;
    return axios.get(url)
}