import { put, call } from 'redux-saga/effects'
import { getPvpStats } from '../../api/api'

export function* getPvpStatsSaga() {
    const data = yield call(getPvpStats)
    yield put({ type: 'LOADING_PVPSTATS' })
    yield put({ type: 'LOAD_PVPSTATS', pvpstats: data.data })
    yield put({ type: 'LOADING_PVPSTATS' })
}