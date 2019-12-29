import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatTabsModule } from '@angular/material';
import {EditModeComponent} from './../edit-mode/edit-mode.component.ts'
import {ViewModeComponent} from './../view-mode/view-mode.component.ts'


@NgModule({
  imports: [BrowserModule,BrowserAnimationsModule, FormsModule, HttpClientModule, MatTabsModule],
  declarations: [AppComponent, HelloComponent, EditModeComponent, ViewModeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {



}
