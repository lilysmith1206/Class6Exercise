import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  transferredQuery: string = '';

  transfer($event) {
    this.transferredQuery = '';
    setTimeout(() => {
      this.transferredQuery = $event;
    })

  }
}
