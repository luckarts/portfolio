import * as actions from "./actions";

test("entitiesReceive", () => {
  expect(actions.activeTab(0)).toEqual({
    type: actions.CURRENT_TAB,
    payload: { current_tabs: 0 }
  });
});
