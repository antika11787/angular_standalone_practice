import {
  AfterContentInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})

// ngOnChanges - handles changes in our inputs
// ngOnInit - initialization of components and fetch data
// ngDoCheck - reduces performance, runs after every onChange
// ngAfterContentInit - runs after external content in current component
// ngAfterContentChecked - handles changes in our projected content
// ngAfterViewInit - runs after the view along with its children are initialized
// ngAfterViewChecked - called after every check of the view along with its children
export class ContactComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit
{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }

  ngOnInit(): void {
    console.log('init');
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('afterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('afterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('afterViewChecked');
  }
}
