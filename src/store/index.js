import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore, } from "redux";
import rootReducer from "./reducer";
import thunk from 'redux-thunk';
import logger from "redux-logger";

export const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk)
	));

export default store;