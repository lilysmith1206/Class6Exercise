import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() query: string;

  queries: string[] = [];

  ngOnChanges($event) {
    if ($event.query.currentValue.length > 0) {
      this.queries.push($event.query.currentValue);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
