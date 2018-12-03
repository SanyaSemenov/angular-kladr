import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { KladrService } from './kladr.service';
import { Options } from './options';
import { KLADR_OPTIONS } from './tokens';

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
export class KladrModule {
  static forRoot(options: Options = undefined): ModuleWithProviders {
    return {
      providers: [
        {
          provide: KLADR_OPTIONS,
          useValue: options
        }
      ],
      ngModule: KladrModule
    };
  }
}
