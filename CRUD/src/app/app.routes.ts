import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/index/usuario.component';
import { CreateComponent } from './components/usuario/create/create.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'usuario/nuevo', component: CreateComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
