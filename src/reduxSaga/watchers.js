import { takeEvery } from 'redux-saga/effects'
import { getPvpStatsSaga } from './sagas/users';


function* watchSaga() {
    yield takeEvery('GET_PVPSTATS', getPvpStatsSaga);
}

export default function* rootSaga() {
    yield watchSaga();
}