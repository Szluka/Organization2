import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
