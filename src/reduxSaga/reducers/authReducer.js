const initialAuth = {
    auth: false,
    token: null,
    loading: false,
    battletag: null
}

export const authReducer = function (state = initialAuth, action) {
    switch (action.type) {
        case 'LOAD_TOKEN': {
            return {
                ...state,
                auth: true,
                token: action.token,
            }
        }
        case 'LOAD_BATTLETAG': {
            return {
                ...state,
                battletag: action.battletag,
            }
        }
        case 'LOADING_AUTH': {
            return {
                ...state,
                loading: state.loading ? false : true
            }
        }
        case 'LOGOUT': {
            document.location.href = 'http://localhost:3000';
            return {
                ...state,
                auth: false,
                token: null
            }
        }
        default: return state;
    }
}