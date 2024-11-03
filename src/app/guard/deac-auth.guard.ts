import { CanDeactivateFn } from '@angular/router';
import { CustomerComponent } from '../common/customer/customer.component';

export const deacAuthGuard: CanDeactivateFn<CustomerComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.canNavigate()) {
    return true;
  } else {
    return false;
  }
};
