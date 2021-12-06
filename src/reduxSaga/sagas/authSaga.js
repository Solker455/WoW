import { put, call } from 'redux-saga/effects'
import { apiUserInfo } from '../../api/api'

export function* authSaga(state) {
    yield put({ type: 'LOADING_AUTH' })
    yield put({ type: 'LOAD_TOKEN', token: state.token })
    const data = yield call(apiUserInfo, state.token)
    yield put({ type: 'LOAD_BATTLETAG', battletag: data.data.battletag })
    yield put({ type: 'LOADING_AUTH' })
}