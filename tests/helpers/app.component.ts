import { Component } from '@angular/core';
import { KladrService } from '../../src';

@Component({
  selector: `app-root`,
  template: ``
})
export class AppComponent {
  constructor(private kladr$: KladrService) { }
}
