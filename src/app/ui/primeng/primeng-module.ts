import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

const PRIME_COMPONENTS = [
  TableModule,
  DividerModule,
  ButtonModule,
  InputTextModule,
  AutoCompleteModule,
  CardModule,
  DataViewModule,
  DatePickerModule,
  FloatLabelModule,
  FormsModule,
];

@NgModule({
  declarations: [],
  imports: [PRIME_COMPONENTS],
  exports: [PRIME_COMPONENTS],
})
export class PrimengModule {}
