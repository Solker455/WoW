const initialStats = {
    loadingStats1: false,
    loadingStats2: false,
    loadingList: false,
    names: null,
    realms: null,
    heroStats1: null,
    heroStats2: null
}

export const statsHeroReducer = function (state = initialStats, action) {
    switch (action.type) {
        case 'LOAD_LISTHERO': {
            return {
                ...state,
                names: action.heroNames,
                realms: action.listRealms
            }
        }
        case 'LOAD_STATSHERO1': {
            return {
                ...state,
                heroStats1: action.stats,
            }
        }
        case 'LOAD_STATSHERO2': {
            return {
                ...state,
                heroStats2: action.stats
            }
        }
        case 'LOADING_STATSHERO1': {
            return {
                ...state,
                loadingStats1: true
            }
        }
        case 'LOADING_STATSHERO2': {
            return {
                ...state,
                loadingStats2: true
            }
        }
        case 'LOADING_LISTHERO': {
            return {
                ...state,
                loadingList: true
            }
        }
        default: return state;
    }
}