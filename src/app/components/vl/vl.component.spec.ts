import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlComponent } from './vl.component';

describe('VlComponent', () => {
  let component: VlComponent;
  let fixture: ComponentFixture<VlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
