const initialStats = {
    loading: false,
    data: null,
    
}

export const pvpStatsReducer = function (state = initialStats, action) {
    switch (action.type) {
        case 'LOAD_PVPSTATS': {
            return {
                ...state,
                pvpStats: action.stats,
                pvpNames: action.names
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