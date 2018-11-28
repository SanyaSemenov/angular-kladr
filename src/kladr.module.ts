import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { KladrService } from './kladr.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    JsonpModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [
    KladrService
  ]
})
export class KladrModule { }
