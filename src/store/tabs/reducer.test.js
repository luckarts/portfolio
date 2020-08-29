import { CURRENT_TAB } from "./actions";
import reducer from "./reducer";
const update = { current_tabs: 0 };
describe("Post Reducer", () => {
  it("Should return default state", () => {
    const newState = reducer(undefined, []);
    expect(newState).toEqual(update);
  });
  it("Should return new State", () => {
    const newState = reducer(undefined, { type: CURRENT_TAB, payload: update });
    expect(newState).toEqual(update);
  });
});
