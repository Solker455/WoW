import { put, call } from 'redux-saga/effects'
import { getHeroUser, getCharacterStats } from '../../api/api';

export function* getListHeroSaga() {
    const response = yield call(getHeroUser, localStorage.token)
    let listCharacters = Object.assign([]);
    let listRealms = Object.assign([]);
    response.data.wow_accounts.map((item) => {
        return (item.characters.map((item) => {
            listCharacters.push(item.name)
            listRealms.push(item.realm.slug)
        }))
    })
    yield put({ type: 'LOAD_LISTHERO', heroNames: listCharacters, listRealms: listRealms })
    yield put({ type: 'LOADING_LISTHERO' })
}

export function* getStatsHeroSaga1(stats) {
    const response = yield call(getCharacterStats, localStorage.token, stats.infoHero.name, stats.infoHero.realm)
    let HeroStats = Object.assign([]);
    HeroStats.push(response.data.stamina.effective, response.data.spell_haste.rating, response.data.mastery.rating, response.data.versatility, response.data.spell_crit.rating, response.data.health)
    yield put({ type: 'LOAD_STATSHERO1', stats: HeroStats })
    yield put({ type: 'LOADING_STATSHERO1' })
}

export function* getStatsHeroSaga2(stats) {
    const response = yield call(getCharacterStats, localStorage.token, stats.infoHero.name, stats.infoHero.realm)
    let HeroStats = Object.assign([]);
    HeroStats.push(response.data.stamina.effective, response.data.spell_haste.rating, response.data.mastery.rating, response.data.versatility, response.data.spell_crit.rating, response.data.health)
    yield put({ type: 'LOAD_STATSHERO2', stats: HeroStats })
    yield put({ type: 'LOADING_STATSHERO2' })
}