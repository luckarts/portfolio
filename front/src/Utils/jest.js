import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import rootReducer from "store/reducer";

export const checkProps = (component, expectedProps) => {
  // @ts-ignore
  const ErrProps = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  return ErrProps;
};
export const testStore = initialState => {
  return createStore(rootReducer, initialState);
};
