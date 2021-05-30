import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {ListComponent} from "./list.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeModule} from "../home/home.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {NavModule} from "../nav/nav.module";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [ListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HomeModule,
    RouterModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    NavModule,
    MatCardModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
