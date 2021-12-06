import { takeEvery } from 'redux-saga/effects'
import { getPvpStatsSaga } from './sagas/pvpStatsSaga';
import { getPveStatsSaga } from './sagas/pveStatsSaga';
import { authSaga } from './sagas/authSaga';

function* watchSaga() {
    yield takeEvery('GET_PVPSTATS', getPvpStatsSaga);
    yield takeEvery('GET_PVESTATS', getPveStatsSaga);
    yield takeEvery('SET_TOKEN', authSaga);
    yield takeEvery('LOGOUT', authSaga);
}

export default function* rootSaga() {
    yield watchSaga();
}