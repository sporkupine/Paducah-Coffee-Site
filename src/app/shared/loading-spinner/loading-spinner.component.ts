import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template:
    '<div class="spinner"><div class="inner one"></div><div class="inner two"></div><div class="inner three"></div></div>',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {}
