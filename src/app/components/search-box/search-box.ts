import { Component, input } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CenarioStatus } from '../../types/cenario-status';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
  standalone: true,
})
export class SearchBox {
  statusOptions: CenarioStatus[] = ['Ativo', 'Inativo', 'Pendente'];
  statusSugestions: CenarioStatus[] = [];

  form = {
    id: '',
    status: '',
    toDate: new Date(),
    fromDate: new Date(),
  };

  ngOnInit() {
    this.statusSugestions = [...this.statusOptions];
  }

  statusCompleteMethod(event: any) {
    const query = event.query.toLowerCase();
    this.statusSugestions = this.statusOptions.filter((status) =>
      status.toLowerCase().includes(query)
    );
  }

  reset() {
    this.form = {
      id: '',
      status: '',
      toDate: new Date(),
      fromDate: new Date(),
    };
  }
  search() {
    console.log(this.form);
  }
}

type Message = {
  id: number | null;
  status: CenarioStatus | null;
  fromDate: Date;
  toDate: Date;
};
