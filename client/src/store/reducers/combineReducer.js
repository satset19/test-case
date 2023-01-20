import { combineReducers } from "redux";
import rootContainer from "./containerReducer"
import rootForm from "./formReducer"

const rootReducer = combineReducers({
    rootContainer,
    rootForm
})
export default rootReducer