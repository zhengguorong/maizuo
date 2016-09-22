import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexView} from "./containers/index.view";
import {CardView} from "./containers/card/card.view";

const appRoutes: Routes = [
  {
    path: 'card',
    component: CardView
  },
  {
    path:'home',
    component: IndexView
  },
  {
    path:'',
    component: IndexView
    // redirectTo:'/home',
    // pathMatch:'full'
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
