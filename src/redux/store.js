import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import sagas from "./sagas";
import reducers from "./reducers";

const rootSaga = function*() {
  yield all([...sagas]);
};
const sagaMiddleware = createSagaMiddleware();
const rootReducer = (state, action) => {
  return combineReducers({
    app: reducers
  })(state, action);
};
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export { store };
