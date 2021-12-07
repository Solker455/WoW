import { put, call } from 'redux-saga/effects'
import { getPveStats } from '../../api/api'
import moment from 'moment'

export function* getPveStatsSaga(state) {
    yield put({ type: 'LOADING_PVESTATS' })
    const response = yield call(getPveStats, localStorage.token, state.fraction, state.raid)
    let pveStats = response.data.entries.slice(0, 10).map((item) => {
        return (
            item.rank
        )
    })
    let pveNames = response.data.entries.slice(0, 10).map((item) => {
        return (
            item.guild.name
        )
    })
    let data = response.data.entries.slice(0, 10).map((item) => {
        return {
            rank: item.rank,
            name: item.guild.name,
            time: moment(item.timestamp).format('Do MMMM YYYY'),
            fraction: item.faction.type,
            region: item.region
        }
    })
    yield put({ type: 'LOAD_PVESTATS', stats: pveStats, names: pveNames, dataTable: data })
    yield put({ type: 'LOADING_PVESTATS' })
}