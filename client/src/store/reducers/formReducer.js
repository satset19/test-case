import { GET_FORM } from "../action/actionType";

const initialState = { forms: [] }

function rootForm(state = initialState, action) {
    switch (action.type) {
        case GET_FORM:
            return {
                ...state,
                forms: action.forms
            }
        default:
            return state
    }
}

export default rootForm