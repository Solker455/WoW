import { put } from 'redux-saga/effects'

export function* loginSaga(state) {
    if (!localStorage.token) {
        yield put({ type: 'LOAD_TOKIN', code: state.payload })
        yield localStorage.token = state.payload;
    }
}