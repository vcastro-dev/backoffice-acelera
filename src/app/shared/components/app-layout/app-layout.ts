import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet, Menubar],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {
  options: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/',
    },
    {
      label: 'Schemas',
      routerLink: '/schemas',
    },
  ];
}
