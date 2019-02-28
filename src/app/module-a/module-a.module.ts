import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAoneComponent } from './component-aone/component-aone.component';

const routes: Routes = [
  {path: '', component: ComponentAoneComponent}
];

@NgModule({
  declarations: [ComponentAoneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModuleAModule {
}
