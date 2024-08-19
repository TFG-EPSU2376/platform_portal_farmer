# React Web Portal with Vite

This project is a web portal built with React and Vite. It leverages AWS Amplify for authentication and authorization using Amazon Cognito. The portal is designed to connect with various AWS services and external APIs, making it a flexible solution for web-based applications.

## Features

- Fast development with Vite
- User authentication using AWS Cognito
- Integration with external APIs
- Map integration with Mapbox

## Software Requirements

- Node.js (version 14 or higher)
- npm or yarn
- AWS account with Cognito and Identity Pool configured
- Mapbox account for map integration

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/react-vite-web-portal
   cd react-vite-web-portal
   ```

2. Install dependencies:
   npm install

3. Configure environment variables:

Create a .env file in the root of the project and add the following environment variables:
VITE_API_HOST=your_api_host
VITE_USER_POOL_ID=your_user_pool_id
VITE_IDENTITY_POOL_ID=your_identity_pool_id
VITE_USER_POOL_CLIENT_ID=your_user_pool_client_id
VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token

4. Run the development server:
   npm run dev

## Configuration

The following environment variables are required for proper configuration:

VITE_API_HOST: The base URL of your API.
VITE_USER_POOL_ID: Your AWS Cognito User Pool ID.
VITE_IDENTITY_POOL_ID: Your AWS Cognito Identity Pool ID.
VITE_USER_POOL_CLIENT_ID: Your AWS Cognito User Pool Client ID.
VITE_MAPBOX_ACCESS_TOKEN: Your Mapbox access token for map services.
These variables are used in the application as follows:

```
const API_HOST = import.meta.env.VITE_API_HOST;
const USER_POOL_ID = import.meta.env.VITE_USER_POOL_ID;
const IDENTITY_POOL_ID = import.meta.env.VITE_IDENTITY_POOL_ID;
const USER_POOL_CLIENT_ID = import.meta.env.VITE_USER_POOL_CLIENT_ID;

Amplify.configure({
  Auth: {
    userPoolId: USER_POOL_ID,
    userPoolClientId: USER_POOL_CLIENT_ID,
    identityPoolId: IDENTITY_POOL_ID,
    allowGuestAccess: true,
    signUpVerificationMethod: "code",
    loginWith: {
      oauth: {
        domain:
          "https://mutualsailfishdomain.auth.eu-central-1.amazoncognito.com",
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
        responseType: "code",
      },
    },
  },
});
```
