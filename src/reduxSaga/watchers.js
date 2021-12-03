import { takeEvery } from 'redux-saga/effects'
import { getPvpStatsSaga } from './sagas/pvpStatsSaga';
import { getPveStatsSaga } from './sagas/pveStatsSaga';
import { registerSaga } from './sagas/registerSaga';


function* watchSaga() {
    yield takeEvery('GET_PVPSTATS', getPvpStatsSaga);
    yield takeEvery('GET_PVESTATS', getPveStatsSaga);
    yield takeEvery('SET_REGISTER', registerSaga);
}

export default function* rootSaga() {
    yield watchSaga();
}