import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PagesModule { }
