import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({children}: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirect_uri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirect_uri) {
    throw new Error("Unable to initialise auth");
  }

const onRedirectCallBack = (appState? : AppState, user?: User) => {
        console.log("USER", user);
        
}

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirect_uri,
      }}
      onRedirectCallback={onRedirectCallBack}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
