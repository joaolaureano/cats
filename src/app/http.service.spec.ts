import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should request a batch of cats with the given limit', () => {
    service.getCats(10).subscribe((cats) => expect(cats.length).toBe(1));
    const req = httpMock.expectOne(`${service.imagesEndPoint}?limit=10`);
    req.flush([{ id: 'abc', url: 'https://example.com/cat.jpg' }]);
    httpMock.verify();
  });
});
