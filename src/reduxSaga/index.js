import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { pvpStatsReducer } from "./reducers/pvpStatsReducer.js";
import { pveStatsReducer } from "./reducers/pveStatsReducer.js";
import rootSaga from "./watchers.js";
import { authReducer } from "./reducers/authReducer.js";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    pvp: pvpStatsReducer,
    pve: pveStatsReducer,
    auth: authReducer,
    
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(rootSaga)