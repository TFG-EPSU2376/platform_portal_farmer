import { MiddlewareAPI, isRejectedWithValue } from "@reduxjs/toolkit";

import { logout } from "../actions";
 import { api as _api } from "../../api/";

export const UnAuthErrorMiddleware =
 (window)=> (api: MiddlewareAPI) => (next) => (action) => {
    // if (isRejectedWithValue(action)) {
    //   if (action.payload?.status === 401) {
    //     api.dispatch(logout());
    //     api.dispatch(_api.util.resetApiState());

    //     if (typeof window !== 'undefined') {
    //       window.location.reload();
    //     }

    //   }
    // } else  if (action.payload?.status === 401) {
    //     api.dispatch(logout());
    //     api.dispatch(_api.util.resetApiState());
    //     if (typeof window !== 'undefined') {
    //       window.location.reload();
    //     }
    // }

    return next(action);
  };
