import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{TodosComponent}from'./components/todos/todos.component';
import{SearchComponent}from'./components/search/search.component';
import{AboutComponent}from'./components/about/about.component';

const appRoutes: Routes = [
    {
        path:'',
        component:TodosComponent,
        pathMatch: 'full'
    },
    {
        path:'search',
        component:SearchComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);