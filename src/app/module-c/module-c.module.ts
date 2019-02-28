import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { RouterModule, Routes } from '@angular/router';
import { ComponentConeComponent } from './component-cone/component-cone.component';

// const routes: Routes = [
//   {path: '', component: ComponentConeComponent}
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
    // RouterModule.forChild(routes)
  ],
  exports: [ComponentConeComponent],
  declarations: [ComponentConeComponent]
})
export class ModuleCModule { }
