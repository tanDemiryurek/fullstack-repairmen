import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandevusorgulaComponent } from './randevusorgula.component';

describe('RandevusorgulaComponent', () => {
  let component: RandevusorgulaComponent;
  let fixture: ComponentFixture<RandevusorgulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandevusorgulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandevusorgulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
