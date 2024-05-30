import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisingComponent } from './franchising.component';

describe('FranchisingComponent', () => {
  let component: FranchisingComponent;
  let fixture: ComponentFixture<FranchisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FranchisingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FranchisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
