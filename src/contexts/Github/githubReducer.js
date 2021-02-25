import {
  CLEAR_USERS,
  FETCH_REPOS,
  FETCH_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";

const handlers = {
  [FETCH_REPOS]: (state, { payload }) => ({
    ...state,
    repos: payload,
    loading: false,
  }),

  [FETCH_USER]: (state, { payload }) => ({
    ...state,
    user: payload,
    loading: false,
  }),

  [SEARCH_USERS]: (state, { payload }) => ({
    ...state,
    users: payload,
    loading: false,
  }),

  [CLEAR_USERS]: (state) => ({ ...state, users: [] }),

  [SET_LOADING]: (state) => ({ ...state, loading: true }),

  DEFAULT: (state) => state,
};

export const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
