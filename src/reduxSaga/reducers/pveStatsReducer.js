const initialStats = {
    loading: false,
    data: []
}

export const pveStatsReducer = function (state = initialStats, action) {
    switch (action.type) {
        case 'LOAD_PVESTATS': {
            return {
                ...state,
                data: action.pvestats
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