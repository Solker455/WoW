import { takeEvery } from 'redux-saga/effects'
import { getPvpStatsSaga } from './sagas/pvpStatsSaga';
import { getPveStatsSaga } from './sagas/pveStatsSaga';


function* watchSaga() {
    yield takeEvery('GET_PVPSTATS', getPvpStatsSaga);
    yield takeEvery('GET_PVESTATS', getPveStatsSaga);
}

export default function* rootSaga() {
    yield watchSaga();
}