import { HIDE_ALERT, SHOW_ALERT } from "../types";

const handlers = {
  [SHOW_ALERT]: (state, payload) => payload,
  [HIDE_ALERT]: () => null,
  DEFAULT: (state) => state,
};

export default function AlertReducer(state, action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
}
