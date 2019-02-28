import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentBoneComponent } from './component-bone/component-bone.component';
import { ModuleCModule } from '../module-c/module-c.module';

const routes: Routes = [
  {path: '', component: ComponentBoneComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ModuleCModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentBoneComponent]
})
export class ModuleBModule { }
