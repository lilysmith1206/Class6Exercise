import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output('searchQuery') searchResultEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitQuery($event) {
    this.searchResultEmitter.emit($event.path[1].children[0].value);
  }
}
