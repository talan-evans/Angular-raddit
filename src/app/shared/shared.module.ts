import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortVersionPipe } from './short-version.pipe';



@NgModule({
  declarations: [ShortVersionPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ShortVersionPipe
  ]
})
export class SharedModule { }
