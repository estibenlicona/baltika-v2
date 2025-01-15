import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadderInterceptor } from './shared/interceptor/loadder.interceptor';
import { authConfig } from './auth/auth.config';
import { provideAuth } from 'angular-auth-oidc-client';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([loadderInterceptor])), 
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAuth(authConfig),
    provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
