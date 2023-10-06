import { LOGIN } from "./ActionType";

let initial = {
    isLogin : false
}

export const Reducer = (state=initial,{ type }) => {
    switch (type) {
        case LOGIN :
            return {
                ...state,
                isLogin : true
            }
    
        default: return state
    }
}