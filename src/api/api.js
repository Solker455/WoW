import axios from "axios";

export async function getPvpStats() {
    const url = `https://api.lenskii.nomoredomains.icu/pvpstatistic`;
    return await axios.get(url)
}

export async function getPveStats() {
    const url = `https://api.lenskii.nomoredomains.icu/mythicstatistic`;
    return await axios.get(url)
}

export async function apiLogin(inputEmail, inputPassword) {
    const url = `https://api.lenskii.nomoredomains.icu/signin`;
    return await axios.post(url, {
        email: inputEmail,
        password: inputPassword
    })
}

export async function apiRegister(inputEmail, inputPassword, inputName) {
    const url = `https://api.lenskii.nomoredomains.icu/signup`;
    return await axios.post(url, {
        name: inputName,
        email: inputEmail,
        password: inputPassword
    }).catch(error => {
        return error.response
    })
}