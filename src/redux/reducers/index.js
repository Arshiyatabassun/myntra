import addItems from "./addItem";
import wishedItems from "./wishReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addItems, wishedItems
})

export default rootReducer