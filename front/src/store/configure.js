import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();



const enhancers = [applyMiddleware(sagaMiddleware)];
const configureStore = () => {
  const store = createStore(reducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
