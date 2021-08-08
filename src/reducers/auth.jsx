import { LOG_IN, LOG_OUT, REGISTER } from "../constants/actionTypes";

const initState = {
    inAuthenticated: false,
    error: false,
    user: {}
}

export const user =(state = initState, action) => {
    switch (action.type) {
        case REGISTER:
            console.log('Resistered')
            return {
                isAuthenticated: false,
                user: action.payload.user
            }

        case LOG_IN:
            console.log('Logged in') 
            return {
            isAuthenticated: false,
            user: action.payload.data.user
        }

        case LOG_OUT:
            return {
                isAuthenticated: false,
                user: {}
            }
            
        default:
            return state    
    }
}