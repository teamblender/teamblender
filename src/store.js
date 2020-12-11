import { createStore } from "redux";

export default createStore(function (state, action) {
  switch (action.type) {
    case "toStage0":
      return { ...state, stage: 0 };
    case "toStage1":
      return { ...state, stage: 1 };
    case "select":
      return { ...state, selected: action.selected };
    default:
      return state;
  }
});
