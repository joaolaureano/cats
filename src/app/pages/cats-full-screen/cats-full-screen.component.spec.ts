import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CatsFullScreenComponent } from './cats-full-screen.component';

describe('CatsFullScreenComponent', () => {
  let component: CatsFullScreenComponent;
  let fixture: ComponentFixture<CatsFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [provideHttpClientTesting()],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
