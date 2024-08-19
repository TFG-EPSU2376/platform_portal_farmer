import { Amplify } from "aws-amplify";
 

const API_HOST = import.meta.env.VITE_API_HOST;
const USER_POOL_ID = import.meta.env.VITE_USER_POOL_ID;
const IDENTITY_POOL_ID = import.meta.env.VITE_IDENTITY_POOL_ID;
const USER_POOL_CLIENT_ID = import.meta.env.VITE_USER_POOL_CLIENT_ID;
 
Amplify.configure({
   Auth: {  
     Cognito: {
       userPoolId: USER_POOL_ID,
       userPoolClientId: USER_POOL_CLIENT_ID,
       identityPoolId:IDENTITY_POOL_ID,
       allowGuestAccess: true,
       signUpVerificationMethod: "code",  
      loginWith: {
         oauth: {
          domain: "https://*.auth.eu-central-1.amazoncognito.com",
          scopes: [
            "phone",
            "name",
            "email",
            "profile",
            "openid",
            "aws.cognito.signin.user.admin",
          ],
          redirectSignIn: ["https://localhost:3000/"],
          redirectSignOut: ["http://localhost:3000/"],
          responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
        },
      },
    },
  },
});

 