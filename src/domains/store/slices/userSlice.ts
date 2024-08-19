import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLoaded: boolean;
  isAuthenticated: boolean | undefined;
  newPasswordRequired: boolean;
  username: string | undefined;
  oldPassword: string | undefined;
  credentials: any;
  identityId: any;
  tokens?: {
    accessToken?: any;
    idToken?: any;
  };
  userSub: any;
  user?: any;
}

const initialState: UserState = {
  isLoaded:false,
  isAuthenticated: undefined,
  newPasswordRequired: false,
  username: undefined,
  oldPassword: undefined,
  credentials: undefined,
  identityId: undefined,
  tokens: undefined,
  userSub: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    load: (state) => {
      state.isAuthenticated = undefined;
    },
    login: (state) => {
      state.isAuthenticated = true;
      state.isLoaded = true;
      localStorage.setItem("isAuthenticated", "true");
    },
    setUnAuthSession: (state, action) => {
     state.isLoaded = true;
    state.isAuthenticated = false;
  },
    setAuthSession: (state, action) => {
        //  state.isAuthenticated = true;
      state.isLoaded = true;
      state.isAuthenticated = true;
      state.credentials = action.payload.credentials;
      state.identityId = action.payload.identityId;
      state.tokens = {accessToken:action.payload.accessToken, idToken:action.payload.idToken};
       state.user = action.payload.user;
      state.userSub = action.payload.userSub;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.credentials = undefined;
      state.identityId = undefined;
      state.tokens = undefined;
      state.userSub = undefined;
      state.isLoaded = true;
      localStorage.setItem("isAuthenticated", "false");
    },
    setNewPasswordRequired: (state, action) => {
      state.newPasswordRequired = true;
      state.username = action.payload.username;
      state.oldPassword = action.payload.oldPassword;
    },
  },
});

export const { login, logout, load, setNewPasswordRequired ,setUnAuthSession,setAuthSession} =
  userSlice.actions;
export default userSlice.reducer;
