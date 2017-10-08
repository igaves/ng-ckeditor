import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgCkeditorComponent} from "./ng-ckeditor.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgCkeditorComponent
  ],
  exports:[
    NgCkeditorComponent
  ]
})
export class NgCkeditorModule { }
