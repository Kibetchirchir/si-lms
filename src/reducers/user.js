import {LOGIN} from "../constants/action-types";

const initialState = {
    user_data: {}
};

function userReducer(state = initialState, action) {
    if (action.type === LOGIN) {
        console.log(action.payload)
        return {
            ...state,
            user_data: action.payload
        }
    }
    return state
}

export default userReducer;
