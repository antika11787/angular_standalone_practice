import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})

// onInit is a hook which involves lifecycle
export class AboutComponent implements OnInit {
  // to pass parameters in route
  submenu: any;
  routeValue: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.submenu = this.route.snapshot.paramMap.get('submenu');
    this.routeValue = this.route.snapshot.paramMap.get('id');
    console.log(this.routeValue, this.submenu);
  }
}
