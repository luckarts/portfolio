export const CURRENT_TAB = "CURRENT_TAB";

export const activeTab = current_tabs => ({
  type: CURRENT_TAB,
  payload: {
    current_tabs
  }
});
