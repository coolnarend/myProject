import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareDataRoutingModule } from './share-data-routing.module';
import { StageComponent } from './stage/stage.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  imports: [
    CommonModule,
    ShareDataRoutingModule
  ],
  declarations: [StageComponent, Parent1Component, Parent2Component, Child1Component, Child2Component]
})
export class ShareDataModule { }
