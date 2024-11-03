import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, RouterLink, FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  userInput = '';

  canNavigate() {
    if (this.userInput !== '') {
      if (
        confirm('Are you sure you want to navigate? Your data will be lost')
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}
