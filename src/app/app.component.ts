import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    HomeComponent,
    CommonModule,
    ReversePipe,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular 18';
  subtitle = 'Angular practice project';
  todayDate = new Date();
  salary = 40000;
  info = { name: 'Ant' };

  isDisabled = false;

  changeTitle() {
    this.title = 'New Angular 18';
  }

  updateTitle(event: any) {
    this.title = event.target.value;
  }
}
