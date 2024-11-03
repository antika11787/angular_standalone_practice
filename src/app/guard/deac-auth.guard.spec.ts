import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { deacAuthGuard } from './deac-auth.guard';

describe('deacAuthGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deacAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
