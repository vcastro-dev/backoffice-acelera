import { Component } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search-box',
  imports: [
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    DatePickerModule,
    DividerModule,
    FloatLabelModule,
    InputTextModule,
  ],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
  standalone: true,
})
export class SearchBox {}
