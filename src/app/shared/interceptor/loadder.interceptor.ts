import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';

export const loadderInterceptor: HttpInterceptorFn = (req, next) => {
  
  const loaderService = inject(LoaderService); 
  loaderService.show();

  return next(req).pipe(
    finalize(() => {
      loaderService.hide();
    })
  );
};
