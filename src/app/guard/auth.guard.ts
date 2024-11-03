import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // since customer is guarded, so after clicking customer link, it will redirect to homepage
  // for that we have to use the inject method
  const router = inject(Router);

  if (route.url.length > 0 && route.url[0]?.path) {
    const menu = route.url[0].path;

    if (menu === 'about') {
      alert("You can't access about page");
      router.navigate(['/customer']);
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
