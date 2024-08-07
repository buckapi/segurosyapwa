import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsComponent } from './ss.component';

describe('SsComponent', () => {
  let component: SsComponent;
  let fixture: ComponentFixture<SsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
