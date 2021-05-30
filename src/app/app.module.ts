import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from './pages/home/home.module';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {NavModule} from './pages/nav/nav.module';
import {MatCardModule} from "@angular/material/card";
import {ListModule} from "./pages/list/list.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
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
    MatCardModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
