import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { RandomImagesComponent } from './random-images.component';

describe('RandomImagesComponent', () => {
  let component: RandomImagesComponent;
  let fixture: ComponentFixture<RandomImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [provideHttpClientTesting()],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
