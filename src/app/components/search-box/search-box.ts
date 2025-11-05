import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search-box',
  imports: [ButtonModule, CardModule, DividerModule, InputTextModule],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
  standalone: true,
})
export class SearchBox {}
