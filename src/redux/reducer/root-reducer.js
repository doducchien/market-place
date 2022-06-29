import { combineReducers } from "redux";
import linkAccountReducer from "./LinkAccount-reducer";
import metamaskReducer from "./metamask-reducer";
import SizeReducer from "./size-reducer";

export const rootReducer = combineReducers({
    metamask: metamaskReducer,
    linkAccount: linkAccountReducer,
    size: SizeReducer
})