import { GET_CONTAINER } from "../action/actionType";

const initialState = { containers: [], openModal: false }

function rootContainer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTAINER:
            return {
                ...state,
                containers: action.containers
            }
        default:
            return state
    }
}

export default rootContainer