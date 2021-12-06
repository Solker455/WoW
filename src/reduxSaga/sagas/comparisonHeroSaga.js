import { put, call } from 'redux-saga/effects'
import { getPveStats } from '../../api/api'

export function* getPveStatsSaga() {
    const data = yield call(getPveStats)
    yield put({ type: 'LOADING_PVESTATS' })
    yield put({ type: 'LOAD_PVESTATS', pvestats: data.data })
    yield put({ type: 'LOADING_PVESTATS' })
}