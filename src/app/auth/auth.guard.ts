import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map } from 'rxjs';


export const authAdminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const oidcSecurityService = inject(OidcSecurityService);

  return oidcSecurityService.getPayloadFromAccessToken().pipe(
    map(resp => {
      const groups = resp["cognito:groups"];
      if (groups && groups.includes("ADMIN")) {
        return true;
      } else {
        return router.createUrlTree(['/']);
      }
    })
  );

};

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const oidcSecurityService = inject(OidcSecurityService);

  return oidcSecurityService.isAuthenticated().pipe(map(isAutenticated => {
    if (isAutenticated) {
      return true;
    } else {
      return router.createUrlTree(['/']);
    }
  }));
}
