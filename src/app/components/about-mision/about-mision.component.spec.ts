import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMisionComponent } from './about-mision.component';

describe('AboutMisionComponent', () => {
  let component: AboutMisionComponent;
  let fixture: ComponentFixture<AboutMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
