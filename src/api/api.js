import axios from "axios";

export async function getPvpStats() {
    const url = `https://api.lenskii.nomoredomains.icu/pvpstatistic`;
    return axios.get(url)
}

export async function getPveStats() {
    const url = `https://api.lenskii.nomoredomains.icu/mythicstatistic`;
    return axios.get(url)
}

export async function apiCode() {
    document.location.href = 'http://localhost:8000/login';
}

export async function apiUserInfo(token) {
    const url = `https://eu.battle.net/oauth/userinfo?region=eu&access_token=${token}`;
    return axios.get(url)
}

export async function getHeroUser(token) {
    const url = `https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=ru_EU&access_token=${token}`;
    return axios.get(url)
}