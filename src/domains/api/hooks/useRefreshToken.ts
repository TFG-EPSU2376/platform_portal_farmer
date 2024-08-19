import { useDispatch, useSelector } from "react-redux";
 
//  import { useLocalStorage } from "../../storage";
// import { useUserData } from "../../user/context";
 
const useRefreshToken = () => {
  const dispatch = useDispatch();
  // const [token, setToken] = useLocalStorage("access_token", "");
  // const [refresh_token, setRefreshToken] = useLocalStorage("refresh_token", "");

  const currentRefreshToken =
    (useSelector<{ auth: { CbUserRefreshJWT?: string } }>(
      (state) => state?.auth?.CbUserRefreshJWT ?? undefined
    ) as string) || undefined;

  // const { host } = useUserData();

  // const [updateToken] = useRefreshTokenMutation();

  const refresh = async () => {
    if (currentRefreshToken) {
      // const { data } = await updateToken({
      //   refresh_token: currentRefreshToken,
      // });
      // setToken(data.access_token);
      // setRefreshToken(data.CbUserRefreshJWT);
      // dispatch(
      //   fetchEntitiesTree({ host, token: data.access_token, entities: [] })
      // );

      // dispatch(
      //   setCredentials({
      //     access_token: data.access_token,
      //     CbUserRefreshJWT: data.CbUserRefreshJWT,
      //   })
      // );
    }
  };

  return {
    refresh,
  };
};

export default useRefreshToken;
