import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {EditModeComponent} from './../edit-mode/edit-mode.component.ts';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import {ViewModeComponent} from './../view-mode/view-mode.component.ts';

import {VideoComponent} from './../video/video.component.ts';

// import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';

import {DemoMaterialModule} from './material-module';

import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [BrowserModule,
  BrowserAnimationsModule, 
  FormsModule, 
  HttpClientModule, 
  DemoMaterialModule,
  MatNativeDateModule,
  ReactiveFormsModule,
  NgxYoutubePlayerModule.forRoot()
  ],
  exports:[MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule],
  declarations: [AppComponent, HelloComponent, EditModeComponent, ViewModeComponent, VideoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {



}
