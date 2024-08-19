import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  loaded: boolean;
  user?: any;
  entitiesIds: number[];
  role?: string;
  access_token?: string;
  app_access_token?: string;
  CbUserRefreshJWT?: string;
  entities?: { selected: []; mode: "single" | "multi" | undefined };
};

const initialState = {
  loaded: false,
  user: null,
  entitiesIds: [],
  role: "",
  entities: { selected: [], mode: undefined },
  access_token: null,
  CbUserRefreshJWT: null,
} as AuthState;

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // Reducer para realizar el login y almacenar el token en el estado
    },
    logout: (state) => {
       window?.localStorage.removeItem("token");
      window?.localStorage.removeItem("user");
 
      state.user = undefined;
      state.role = undefined;
      state.CbUserRefreshJWT = undefined;
      state.access_token = undefined;
      state.loaded = true;
    },
    setAuthLoaded: (
      state,
      {
        payload: { loaded },
      }: PayloadAction<{
        loaded: boolean;
      }>
    ) => {
      state.loaded = loaded;
    },
    setCredentials: (
      state,
      {
        payload: { data, role, CbUserRefreshJWT, access_token,app_access_token },
      }: PayloadAction<{
        data?: any;
        role?: string;
        CbUserRefreshJWT?: string;
        access_token?: string;
        app_access_token?: string;
      }>
    ) => {
      if (data || role) {
        state.user = { ...data, role };
      }
      if (role) {
        state.role = role;
      }
      if (CbUserRefreshJWT) {
        state.CbUserRefreshJWT = CbUserRefreshJWT;
      }
      if (access_token) {
        state.access_token = access_token;
      } 
      state.loaded = true;
    }, 
  },
  extraReducers: (builder) => {},
});

export const {
  login,
  logout,
  setAuthLoaded,
  setCredentials,
 } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
 