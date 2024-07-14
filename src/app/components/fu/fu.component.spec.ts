import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuComponent } from './fu.component';

describe('FuComponent', () => {
  let component: FuComponent;
  let fixture: ComponentFixture<FuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
