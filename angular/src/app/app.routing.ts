import { LoginComponent } from './pages/login/login.component';
/**
 * @description config routing application
 */

import {NgModule} from '@angular/core';
import {Route, Routes, RouterModule, PreloadingStrategy, PreloadAllModules} from '@angular/router';
import {Observable} from 'rxjs';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { 
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: false})],
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
}
