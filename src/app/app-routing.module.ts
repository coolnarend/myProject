import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: '404', component: PageNotFoundComponent },
  {
    path: 'moduleA',
    loadChildren: './module-a/module-a.module#ModuleAModule'
  },
  {
    path: 'moduleB',
    loadChildren: './module-b/module-b.module#ModuleBModule'
  },
  {
    path: 'httpServices',
    loadChildren: './http-services/http-services.module#HttpServicesModule'
  },
  {
    path: 'shareData',
    loadChildren: './share-data/share-data.module#ShareDataModule'
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
