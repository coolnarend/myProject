import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpServicesRoutingModule } from './http-services-routing.module';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';
import { StageComponent } from './stage/stage.component';
import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpServicesRoutingModule
  ],
  declarations: [GetComponent, PostComponent, DeleteComponent, StageComponent],
  providers: [DataService]
})
export class HttpServicesModule { }
