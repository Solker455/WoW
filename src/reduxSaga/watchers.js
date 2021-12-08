import { takeEvery } from 'redux-saga/effects'
import { getPvpStatsSaga } from './sagas/pvpStatsSaga';
import { getPveStatsSaga } from './sagas/pveStatsSaga';
import { authSaga } from './sagas/authSaga';
import { getListHeroSaga, getStatsHeroSaga1, getStatsHeroSaga2 } from './sagas/statsHeroSaga';

function* watchSaga() {
    yield takeEvery('GET_PVPSTATS', getPvpStatsSaga);
    yield takeEvery('GET_PVESTATS', getPveStatsSaga);
    yield takeEvery('SET_TOKEN', authSaga);
    yield takeEvery('GET_LISTHERO', getListHeroSaga);
    yield takeEvery('GET_STATSHERO1', getStatsHeroSaga1);
    yield takeEvery('GET_STATSHERO2', getStatsHeroSaga2);
}

export default function* rootSaga() {
    yield watchSaga();
}