const initialLogin = {
    auth: false,
    token: null,
    loading: false,
    message: null
}

export const registerReducer = function (state = initialLogin, action) {
    switch (action.type) {
        case 'LOAD_TOKIN': {
            return {
                ...state,
                auth: true,
                token: action.token,
                message: null
            }
        }
        case 'LOADING_REGISTER': {
            return {
                ...state,
                loading: state.loading ? false : true
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                auth: false,
                token: null
            }
        }
        case 'ERROR_REGISTER': {
            return {
                ...state,
                message: 'Ошибка регистрации',
                loading: state.loading ? false : true
            }
        }
        default: return state;
    }
}