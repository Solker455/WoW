import { put, call } from 'redux-saga/effects'
import { apiRegister } from '../../api/api'

export function* registerSaga(state) {
    yield put({ type: 'LOADING_REGISTER' })
    const data = yield call(apiRegister, state.payload.email, state.payload.password, state.payload.name)
    console.log(data)
    if (data.status === 200) {
        yield put({ type: 'LOAD_TOKIN', token: data.data.token })
        yield put({ type: 'LOADING_REGISTER' })
    } else {
        yield put({ type: 'ERROR_REGISTER' })
    }
}
