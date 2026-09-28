import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';

import { HttpGeneratorComponent } from './http-generator.component';

describe('HttpGeneratorComponent', () => {
  let component: HttpGeneratorComponent;
  let fixture: ComponentFixture<HttpGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
