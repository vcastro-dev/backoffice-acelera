import { Component } from '@angular/core';
import { PrimengModule } from '../../ui/primeng/primeng-module';
import { SearchBox } from './components/search-box/search-box';

@Component({
  selector: 'app-configurations',
  imports: [PrimengModule, SearchBox],
  templateUrl: './configurations.html',
  styleUrl: './configurations.css',
})
export class Configurations {
  domain: unknown[] = [];
  schema: unknown[] = [];
  result: unknown[] = [];

  ngOnInit() {}
}
