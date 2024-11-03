import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Angular 18';
  subtitle = 'Angular practice project';
  todayDate = new Date();
  salary = 40000;
  info = { name: 'Ant' };

  isDisabled = false;

  // _class = 'inactive';

  _color = 'yellowgreen';
  _fontSize = '12px';

  isShow = true;

  stackInfo = [
    { id: 1, name: 'angular', color: 'goldenrod' },
    { id: 2, name: 'react', color: 'mediumturquoise' },
    { id: 3, name: 'vue', color: 'teal' },
  ];

  changeTitle() {
    this.title = 'New Angular 18';
  }

  updateTitle(event: any) {
    this.title = event.target.value;
  }
}
