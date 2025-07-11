import { Routes } from '@angular/router';
import { WarningsComponent } from './warnings/warnings.component';
import { ToolsComponent } from './tools/tools.component';
import { HelpsComponent } from './helps/helps.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Inicio'
  },
  {
    path: 'warnings',
    component: WarningsComponent,
    title: 'Precauciones'
  },
  {
    path: 'tools',
    component: ToolsComponent,
    title: 'Herramientas'
  },
  {
    path: 'help',
    component: HelpsComponent,
    title: 'Ayuda'
  }
];
