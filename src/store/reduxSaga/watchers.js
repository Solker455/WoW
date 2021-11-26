import { takeEvery } from 'redux-saga/effects'
import { loginSaga } from './sagas/auth';


function* watchSaga() {
    yield takeEvery('SET_LOGIN', loginSaga);
}

export default function* rootSaga() {
    yield watchSaga();
}