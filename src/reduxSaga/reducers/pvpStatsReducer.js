const initialStats = {
    loading: false,
    data: []
}

export const pvpStatsReducer = function (state = initialStats, action) {
    switch (action.type) {
        case 'LOAD_PVPSTATS': {
            return {
                ...state,
                data: action.pvpstats
            }
        }
        case 'LOADING_PVPSTATS': {
            return {
                ...state,
                loading: state.loading ? false : true
            }
        }
        default: return state;
    }
}