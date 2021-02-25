import Axios from "axios";
import React from "react";
import {
  CLEAR_USERS,
  FETCH_REPOS,
  FETCH_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";
import { githubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

/**
 * Async request to Github's API
 * @param {string} path
 * @param {string} params
 */
async function makeGithubRequest(path, params) {
  path = path.startsWith("/") ? path.substr(1) : path;
  let response = null;

  try {
    response = await Axios.get(
      `https://api.github.com/${path}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&${params}`
    );
  } catch {
    return "Request has failed";
  }

  return response.data;
}

export default function GithubState({ children }) {
  const initialState = {
    loading: false,
    users: [],
    user: {},
    repos: [],
  };

  const [state, dispatch] = React.useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const searchUsers = async (name) => {
    setLoading();

    let payload = await makeGithubRequest("/search/users", `q=${name}`);

    if (typeof payload === "string") payload = { error: payload };
    else payload = payload.items;

    dispatch({
      type: SEARCH_USERS,
      payload,
    });
  };

  const fetchUser = async (name) => {
    setLoading();

    let payload = await makeGithubRequest(`users/${name}`);

    if (typeof payload === "string") payload = { error: payload };

    dispatch({
      type: FETCH_USER,
      payload,
    });
  };

  const fetchRepos = async (name) => {
    setLoading();

    let payload = await makeGithubRequest(`users/${name}/repos`, "per_page=10");

    if (typeof payload === "string") payload = { error: payload };

    dispatch({
      type: FETCH_REPOS,
      payload,
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const { user, users, repos, loading } = state;

  return (
    <githubContext.Provider
      value={{
        searchUsers,
        fetchRepos,
        fetchUser,
        clearUsers,

        user,
        users,
        repos,
        loading,
      }}
    >
      {children}
    </githubContext.Provider>
  );
}
