const initialStats = {
    loading: false,
    data: null,
    names: null,
    stats: null
}

export const pveStatsReducer = function (state = initialStats, action) {
    switch (action.type) {
        case 'LOAD_PVESTATS': {
            return {
                ...state,
                pveStats: action.stats,
                pveNames: action.names,
                dataTable: action.dataTable
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