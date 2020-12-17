import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "../middleware";
import menu from "../_reducers/setting";

const rootReducers = combineReducers({ menu });
const store = createStore(rootReducers, applyMiddleware(promise, logger));
export default store;
