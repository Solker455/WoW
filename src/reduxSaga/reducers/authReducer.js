const initialAuth = {
    auth: localStorage.auth,
    token: localStorage.token,
    loading: false,
    battletag: localStorage.battletag
}

export const authReducer = function (state = initialAuth, action) {
    switch (action.type) {
        case 'LOAD_TOKEN': {
            localStorage.token = action.token
            localStorage.auth = true
            return {
                ...state,
                auth: localStorage.auth,
                token: localStorage.token,
            }
        }
        case 'LOAD_BATTLETAG': {
            localStorage.battletag = action.battletag
            return {
                ...state, 
                battletag: localStorage.battletag,
            }
        }
        case 'LOADING_AUTH': {
            return {
                ...state,
                loading: state.loading ? false : true
            }
        }
        default: return state;
    }
}