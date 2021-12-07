import { put, call } from 'redux-saga/effects'
import { getPvpStats } from '../../api/api'

export function* getPvpStatsSaga(state) {
    yield put({ type: 'LOADING_PVPSTATS' })
    const response = yield call(getPvpStats, localStorage.token, state.pvpLadder)
    let pvpStats = response.data.entries.slice(0, 11).map((item) => {
        return (item.rating)
    })
    let pvpNames = response.data.entries.slice(0, 11).map((item) => {
        return (item.character.name)
    })
    yield put({ type: 'LOAD_PVPSTATS', stats: pvpStats, names: pvpNames })
    yield put({ type: 'LOADING_PVPSTATS' })
}