import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SergurosDetailComponent } from './serguros-detail.component';

describe('SergurosDetailComponent', () => {
  let component: SergurosDetailComponent;
  let fixture: ComponentFixture<SergurosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SergurosDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SergurosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
