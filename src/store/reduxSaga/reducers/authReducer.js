const initialLogin = {
    token: localStorage.token
}

export const loginRerucer = function (state = initialLogin, action) {
    switch (action.type) {
        case 'LOAD_TOKIN': {
            console.log(state.token)
            return {
                token: action.code
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                token: null
            }
        }
        default: return state;
    }
}