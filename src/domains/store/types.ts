interface UserState {
  isAuthenticated: boolean;
}

export type RootState = {
  user: UserState;
};
