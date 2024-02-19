import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWhatComponent } from './about-what.component';

describe('AboutWhatComponent', () => {
  let component: AboutWhatComponent;
  let fixture: ComponentFixture<AboutWhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWhatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
