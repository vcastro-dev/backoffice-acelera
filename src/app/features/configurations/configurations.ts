import { Component } from '@angular/core';
import { SearchBox } from './components/search-box/search-box';
import { SearchResult } from './components/search-result/search-result';

@Component({
  selector: 'app-configurations',
  imports: [SearchBox, SearchResult],
  templateUrl: './configurations.html',
  styleUrl: './configurations.css',
})
export class Configurations {
  result: DatabaseSchema[] = [];

  ngOnInit() {}
}
