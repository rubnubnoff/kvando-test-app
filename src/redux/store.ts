import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
