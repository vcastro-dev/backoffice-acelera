import { Routes } from '@angular/router';
import { AppLayout } from './shared/components/app-layout/app-layout';

export const routes: Routes = [
  {
    path: 'login',
    component: AppLayout,
  },
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: 'integration-logs',
        loadChildren: () =>
          import('./features/integrations-logs/integration-logs.routes').then(
            (m) => m.INTEGRATIONS_LOGS_ROUTES
          ),
      },
      {
        path: 'configurations',
        loadChildren: () =>
          import('./features/configurations/configurations.routes').then(
            (m) => m.CONFIGURATIONS_ROUTES
          ),
      },
      {
        path: '',
        redirectTo: 'integration-logs',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'integration-logs',
  },
];
