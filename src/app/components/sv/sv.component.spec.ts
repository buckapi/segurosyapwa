import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvComponent } from './sv.component';

describe('SvComponent', () => {
  let component: SvComponent;
  let fixture: ComponentFixture<SvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
