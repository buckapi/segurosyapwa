import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsctrComponent } from './ssctr.component';

describe('SsctrComponent', () => {
  let component: SsctrComponent;
  let fixture: ComponentFixture<SsctrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsctrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsctrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
