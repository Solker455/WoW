import axios from "axios";

export async function getPvpStats() {
    const url = `https://api.lenskii.nomoredomains.icu/pvpstatistic`;
    return await axios.get(url)
}

export async function getPveStats() {
    const url = `https://api.lenskii.nomoredomains.icu/mythicstatistic`;
    return await axios.get(url)
}