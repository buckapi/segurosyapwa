import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicularComponent } from './vehicular.component';

describe('VehicularComponent', () => {
  let component: VehicularComponent;
  let fixture: ComponentFixture<VehicularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
