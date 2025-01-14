import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {

  config: {
    authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_y3DKBQYxn',
    redirectUrl: 'https://www.baltikeishon.com',
    clientId: '1h48tnu588hrlpa1qtb5mc0v6h',
    scope: 'email openid phone',
    responseType: 'code'
  }
}
