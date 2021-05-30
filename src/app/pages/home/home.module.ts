import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "../../app-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {NavModule} from "../nav/nav.module";

@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    NavModule,
  ]
})
export class HomeModule { }
