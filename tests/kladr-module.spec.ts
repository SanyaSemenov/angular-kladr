import { KladrService, KladrModule, ContentType, BaseResponse } from '../src';
import { TestBed, inject, async } from '@angular/core/testing';
import { AppComponent } from './helpers/app.component';
import { Options } from '../src';

describe('AppComponent', () => {
  let testBedService: KladrService;
  let fixture;
  const options: Options = {
    isSecure: true
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        KladrModule.forRoot(options)
      ],
      providers: []
    }).compileComponents();
    testBedService = TestBed.get(KladrService);

    fixture = TestBed.createComponent(AppComponent);

  });

  it('KladrService should be provided',
    inject([KladrService], (injectService: KladrService) => {
      expect(injectService).toBe(testBedService);
    })
  );

  it('should get reponse',
    async(
      inject([KladrService], (kladr$: KladrService) => {
        kladr$.api({ limit: 5, contentType: ContentType.region, query: 'М' })
          .subscribe((result: BaseResponse) => expect(result.result).toBeTruthy());
      })
    )
  );
});
