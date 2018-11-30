# angular-kladr
Angular 4+ package for better experience using kladr api service

- [Installation](##installation)
- [Setup](##setup)
- [Usage](##usage)
- [Demo](##demo)

## Installation

```bash
$ npm install angular-kladr --save
```

## Setup
### 1. Import KladrModule from *node_modules/angular-kladr* folder

```typescript
import { KladrModule } from 'angular-kladr';
```
Add imported module to the *imports* section in NgModule decorator
```typescript
@NgModule({
  .
  .
  .
  imports: [
    :
    KladrModule;
  ]
})
```

### 2. Inject service into your component/service constructor

```typescript

import { Component } from '@angular/core';
import { KladrService } from 'angular-kladr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private kladr$: KladrService
  ){ }
}
```

## Usage

### Basic usage

Basically, you need to create collection of type *Observable\<BaseResponse\>* imported from the package.
```typescript
public cities: Observable<BaseResponse>;
```

Then create FormControl, which you will get value from in order to pass it into kladr api request.

Assign the request to the collection in the contructor as shown below:
```typescript
constructor(private kladr$: KladrService) {
  this.cityControl = new FormControl('');

  this.cities = this.cityControl.valueChanges
    .pipe(
      takeUntil(this.ngUnsubscribe),
      debounceTime(100),
      switchMap(value => {
        const context: SearchContext = {
          ...this.regionContext,
          query: value
        };
        return this.kladr$.api(context);
      })
    );
}
private ngUnsubscribe = new Subject<void>();
private regionContext: SearchContext = {
  limit: 10,
  contentType: ContentType.region
};

public cities: Observable<BaseResponse>;
public cityControl: FormControl;
```

Also, we need to know which city a client will choose to provide some kind of autocomplete
```typescript
public shosenCity: BaseModel;

chooseCity(city: BaseModel) {
  this.shosenCity = city;
  this.cityControl.setValue(city.name);
}
```
To make this work let's add some html code in our template:
```html
<div>
  <label for="city">Choose city</label>
  <input type="text" id="city" name="city" [formControl]="cityControl">
  <ul>
    <li *ngFor="let city of (cities | async)?.result">
      <a href="javascript:void(0)" (click)="chooseCity(city)">{{city.name}}</a>
    </li>
  </ul>
  <div>
    <pre>{{chosenCity | json}}</pre>
  </div>
</div>
```
Combining all together:

1. app.module.ts :
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KladrModule } from 'angular-kladr';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KladrModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
2. app.component.ts :
```typescript
import { Component } from '@angular/core';
import { KladrService, BaseResponse, SearchContext, ContentType, BaseModel } from 'angular-kladr';
import { Observable, Subject } from 'rxjs';
import { takeUntil, debounceTime, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private kladr$: KladrService) {
    this.cityControl = new FormControl('');

    this.cities = this.cityControl.valueChanges
      .pipe(
        takeUntil(this.ngUnsubscribe),
        debounceTime(100),
        switchMap(value => {
          const context: SearchContext = {
            ...this.regionContext,
            query: value
          };
          return this.kladr$.api(context);
        })
      );
  }

  private ngUnsubscribe = new Subject<void>();
  private regionContext: SearchContext = {
    limit: 10,
    contentType: ContentType.region
  };

  public cities: Observable<BaseResponse>;
  public cityControl: FormControl;
  public chosenCity: BaseModel;

  chooseCity(city: BaseModel) {
    this.chosenCity = city;
    this.cityControl.setValue(city.name);
  }
}
```
3. app.component.html :
```html
<div>
  <label for="city">Choose city</label>
  <input type="text" id="city" name="city" [formControl]="cityControl">
  <ul>
    <li *ngFor="let city of (cities | async)?.result">
      <a href="javascript:void(0)" (click)="chooseCity(city)">{{city.name}}</a>
    </li>
  </ul>
  <div>
    <pre>{{chosenCity | json}}</pre>
  </div>
</div>

```

## Demo
The demo will be available soon.