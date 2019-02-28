import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StageComponent } from './stage/stage.component';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: '', component: StageComponent, children: [
      { path: '', redirectTo: 'getComp' },
      { path: 'getComp', component: GetComponent },
      { path: 'postComp', component: PostComponent },
      { path: 'delComp', component: DeleteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpServicesRoutingModule { }
