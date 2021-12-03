import axios from "axios";

export async function getPvpStats() {
    const url = `https://api.lenskii.nomoredomains.icu/pvpstatistic`;
    return await axios.get(url)
}

export async function getPveStats() {
    const url = `https://api.lenskii.nomoredomains.icu/mythicstatistic`;
    return await axios.get(url)
}

export async function apiToken(inputCode) {
    const CLIENT_ID = '7347dbd64c2b4689aecc2bf54350bab2';
    const CLIENT_SECRET = 'qp4z0dkLeyAAo9JIYHUBtshcH8tCfy17';
    const url = `https://us.battle.net/oauth/token`;
    const basicAuth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    return await axios.post(url, {
        redirect_uri: 'http://localhost:3000/',
        grant_type: 'authorization_code',
        code: inputCode,
        header: {
            authorization: `Basic ${basicAuth}`
        }
    })
}

export async function apiCode() {
    document.location.href = 'https://us.battle.net/oauth/authorize?client_id=7347dbd64c2b4689aecc2bf54350bab2&scope=wow.profile&redirect_uri=http://localhost:3000/&response_type=code';
}