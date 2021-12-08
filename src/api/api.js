import axios from "axios";

export function getPvpStats(token, pvpLadder) {
    const url = `https://eu.api.blizzard.com/data/wow/pvp-season/31/pvp-leaderboard/${pvpLadder}?namespace=dynamic-eu&locale=ru_EU&access_token=${token}`; //получение пвп статистики из api Blizzard
    return axios.get(url)
}

export function getPveStats(token, fraction, raid) {
    const url = `https://eu.api.blizzard.com/data/wow/leaderboard/hall-of-fame/${raid}/${fraction}?namespace=dynamic-eu&locale=ru_EU&access_token=${token}`; //получение пве статистики из api Blizzard
    return axios.get(url)
}

export function apiCode() {
    document.location.href = 'http://localhost:8000/login'; //получение токена авторизации
}

export function apiUserInfo(token) {
    const url = `https://eu.battle.net/oauth/userinfo?region=eu&access_token=${token}`; //получение battletag из api Blizzard
    return axios.get(url)
}

export function getHeroUser(token) {
    const url = `https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=ru_EU&access_token=${token}`; //получение списка персонажей пользователя из api Blizzard
    return axios.get(url)
}

export function getCharacterStats(token, name, realm) {
    const url = `https://eu.api.blizzard.com/profile/wow/character/${realm}/${name}/statistics?namespace=profile-eu&locale=ru_EU&access_token=${token}`; //получение статистики персонажа из api Blizzard
    return axios.get(url).catch(error => {
        return error
    })
}

