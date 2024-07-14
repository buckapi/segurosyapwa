import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaComponent } from './va.component';

describe('VaComponent', () => {
  let component: VaComponent;
  let fixture: ComponentFixture<VaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
