const initialStats = {
    loading: false,
    data: []
}

export const pveStatsReducer = function (state = initialStats, action) {
    switch (action.type) {
        case 'LOAD_PVESTATS': {
            return {
                ...state,
                stats: action.stats,
                names: action.names,
                data: action.dataTable
            }
        }
        case 'LOADING_PVESTATS': {
            return {
                ...state,
                loading: state.loading ? false : true
            }
        }
        default: return state;
    }
}