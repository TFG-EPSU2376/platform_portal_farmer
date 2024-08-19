// src/auth/hooks/useAuth.js
import { useSelector, useDispatch } from "react-redux";
import {
  signIn,
  signOut,
  getCurrentUser,
  confirmSignIn,
  fetchAuthSession,
} from "aws-amplify/auth";
import {
  load as loadQuery,
  login as loginQuery,
  logout as logoutQuery,
  setUnAuthSession,
  setAuthSession,
  setNewPasswordRequired,
} from "../../store/slices/userSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, username, oldPassword } = useSelector(
    (state: {
      user: { isAuthenticated: boolean; username: string; oldPassword: string };
    }) => state.user
  );

  const loadState = async () => {
    try {
      const session = (await loadSession()) as any;
      if (session === false) {
        dispatch(setUnAuthSession({}));
      } else {
        dispatch(
          setAuthSession({
            credentials: session.user.signInDetails,
            identityId: session.user.username,
            tokens: session.tokens,
            userSub: session.user.userId,
          })
        );
      }
    } catch (error) {
      return false;
    }
  };

  const loadSession = async () => {
    try {
      const user = await getCurrentUser();
      const session = await fetchAuthSession();
      const authToken = (await fetchAuthSession()).tokens?.idToken?.toString();
      console.log("authToken", authToken);

      const { tokens } = session;

      return { user, ...tokens };
    } catch (error) {
      return false;
      console.error("Error loading session:", error);
      return null;
    }
  };

  const login = async (data) => {
    const { username, password } = data;
    try {
      await signOut(); // Limpiar sesiones anteriores
      const signData = (await signIn({ username, password })) as any;
      if (signData.isSignedIn) {
        const session = (await loadSession()) as any;
        // dispatch(loginQuery(session));
        dispatch(
          setAuthSession({
            credentials: session.user.signInDetails,
            identityId: session.user.username,
            tokens: session.tokens,
            userSub: session.user.userId,
          })
        );
        return { newPasswordRequired: false };
      } else if (signData.nextStep?.signInStep === "NEW_PASSWORD_REQUIRED") {
        dispatch(setNewPasswordRequired({ username, oldPassword: password }));
        return { newPasswordRequired: true };
      } else {
        toast.error(`Error: ${signData.nextStep.signInStep}`);
      }
    } catch (error) {
      toast.error(
        error.name === "NotAuthorizedException"
          ? "Usuario o contraseña incorrecta"
          : error.message
      );
    }
  };

  const completeNewPasswordChallenge = async (newPassword) => {
    try {
      await signIn({ username, password: oldPassword });
      await confirmSignIn({ challengeResponse: newPassword });
      const session = (await loadSession()) as any;
      dispatch(loginQuery(session));
    } catch (error) {
      toast.error(`Error changing password: ${error.message}`);
    }
  };

  const logout = async () => {
    try {
      await signOut();
      dispatch(logoutQuery());
    } catch (error) {
      toast.error(`Error logging out: ${error.message}`);
    }
  };

  return {
    isAuthenticated,
    login,
    completeNewPasswordChallenge,
    logout,
    loadState,
    loadSession,
  };
};
