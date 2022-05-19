import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { AddComponent } from './add/add.component';
import { RemoveComponent } from './remove/remove.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    AddComponent,
    RemoveComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
